import { CrossServiceTokenData } from '@standardnotes/security'
import { RoleName } from '@standardnotes/common'
import { AnalyticsActivity, AnalyticsStoreInterface, Period } from '@standardnotes/analytics'
import { TimerInterface } from '@standardnotes/time'
import { NextFunction, Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { BaseMiddleware } from 'inversify-express-utils'
import { verify } from 'jsonwebtoken'
import { AxiosError, AxiosInstance } from 'axios'
import { Logger } from 'winston'

import TYPES from '../Bootstrap/Types'
import { CrossServiceTokenCacheInterface } from '../Service/Cache/CrossServiceTokenCacheInterface'

@injectable()
export class AuthMiddleware extends BaseMiddleware {
  constructor(
    @inject(TYPES.HTTPClient) private httpClient: AxiosInstance,
    @inject(TYPES.AUTH_SERVER_URL) private authServerUrl: string,
    @inject(TYPES.AUTH_JWT_SECRET) private jwtSecret: string,
    @inject(TYPES.CROSS_SERVICE_TOKEN_CACHE_TTL) private crossServiceTokenCacheTTL: number,
    @inject(TYPES.CrossServiceTokenCache) private crossServiceTokenCache: CrossServiceTokenCacheInterface,
    @inject(TYPES.Timer) private timer: TimerInterface,
    @inject(TYPES.AnalyticsStore) private analyticsStore: AnalyticsStoreInterface,
    @inject(TYPES.Logger) private logger: Logger,
  ) {
    super()
  }

  async handler(request: Request, response: Response, next: NextFunction): Promise<void> {
    const authHeaderValue = request.headers.authorization as string

    if (!authHeaderValue) {
      response.status(401).send({
        error: {
          tag: 'invalid-auth',
          message: 'Invalid login credentials.',
        },
      })

      return
    }

    try {
      let crossServiceTokenFetchedFromCache = true
      let crossServiceToken = null
      if (this.crossServiceTokenCacheTTL) {
        crossServiceToken = await this.crossServiceTokenCache.get(authHeaderValue)
      }

      if (crossServiceToken === null) {
        const authResponse = await this.httpClient.request({
          method: 'POST',
          headers: {
            Authorization: authHeaderValue,
            Accept: 'application/json',
          },
          validateStatus: (status: number) => {
            return status >= 200 && status < 500
          },
          url: `${this.authServerUrl}/sessions/validate`,
        })

        if (authResponse.status > 200) {
          response.setHeader('content-type', authResponse.headers['content-type'])
          response.status(authResponse.status).send(authResponse.data)

          return
        }

        crossServiceToken = authResponse.data.authToken
        crossServiceTokenFetchedFromCache = false
      }

      response.locals.authToken = crossServiceToken

      const decodedToken = <CrossServiceTokenData>verify(crossServiceToken, this.jwtSecret, { algorithms: ['HS256'] })

      response.locals.freeUser =
        decodedToken.roles.length === 1 &&
        decodedToken.roles.find((role) => role.name === RoleName.CoreUser) !== undefined

      await this.analyticsStore.markActivity(
        [
          AnalyticsActivity.GeneralActivity,
          response.locals.freeUser
            ? AnalyticsActivity.GeneralActivityFreeUsers
            : AnalyticsActivity.GeneralActivityPaidUsers,
        ],
        decodedToken.analyticsId as number,
        [Period.Today],
      )

      if (this.crossServiceTokenCacheTTL && !crossServiceTokenFetchedFromCache) {
        await this.crossServiceTokenCache.set({
          authorizationHeaderValue: authHeaderValue,
          encodedCrossServiceToken: crossServiceToken,
          expiresAtInSeconds: this.getCrossServiceTokenCacheExpireTimestamp(decodedToken),
          userUuid: decodedToken.user.uuid,
        })
      }

      response.locals.userUuid = decodedToken.user.uuid
      response.locals.roles = decodedToken.roles
    } catch (error) {
      const errorMessage = (error as AxiosError).isAxiosError
        ? JSON.stringify((error as AxiosError).response?.data)
        : (error as Error).message

      this.logger.error(
        `Could not pass the request to ${this.authServerUrl}/sessions/validate on underlying service: ${errorMessage}`,
      )

      this.logger.debug('Response error: %O', (error as AxiosError).response ?? error)

      if ((error as AxiosError).response?.headers['content-type']) {
        response.setHeader('content-type', (error as AxiosError).response?.headers['content-type'] as string)
      }

      const errorCode =
        (error as AxiosError).isAxiosError && !isNaN(+((error as AxiosError).code as string))
          ? +((error as AxiosError).code as string)
          : 500

      response.status(errorCode).send(errorMessage)

      return
    }

    return next()
  }

  private getCrossServiceTokenCacheExpireTimestamp(token: CrossServiceTokenData): number {
    const crossServiceTokenDefaultCacheExpiration = this.timer.getTimestampInSeconds() + this.crossServiceTokenCacheTTL

    if (token.session === undefined) {
      return crossServiceTokenDefaultCacheExpiration
    }

    const sessionAccessExpiration = this.timer.convertStringDateToSeconds(token.session.access_expiration)
    const sessionRefreshExpiration = this.timer.convertStringDateToSeconds(token.session.refresh_expiration)

    return Math.min(crossServiceTokenDefaultCacheExpiration, sessionAccessExpiration, sessionRefreshExpiration)
  }
}
