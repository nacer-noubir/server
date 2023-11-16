import { Request, Response } from 'express'
import { inject } from 'inversify'
import { BaseHttpController, controller, httpGet, httpPost } from 'inversify-express-utils'
import { TYPES } from '../../Bootstrap/Types'
import { ServiceProxyInterface } from '../../Service/Proxy/ServiceProxyInterface'
import { EndpointResolverInterface } from '../../Service/Resolver/EndpointResolverInterface'

@controller('/v1/items', TYPES.ApiGateway_RequiredCrossServiceTokenMiddleware)
export class ItemsController extends BaseHttpController {
  constructor(
    @inject(TYPES.ApiGateway_ServiceProxy) private serviceProxy: ServiceProxyInterface,
    @inject(TYPES.ApiGateway_EndpointResolver) private endpointResolver: EndpointResolverInterface,
  ) {
    super()
  }

  @httpPost('/')
  async sync(request: Request, response: Response): Promise<void> {
    await this.serviceProxy.callSyncingServer(
      request,
      response,
      this.endpointResolver.resolveEndpointOrMethodIdentifier('POST', 'items/sync'),
      request.body,
    )
  }

  @httpPost('/check-integrity')
  async checkIntegrity(request: Request, response: Response): Promise<void> {
    await this.serviceProxy.callSyncingServer(
      request,
      response,
      this.endpointResolver.resolveEndpointOrMethodIdentifier('POST', 'items/check-integrity'),
      request.body,
    )
  }

  @httpGet('/:uuid')
  async getItem(request: Request, response: Response): Promise<void> {
    await this.serviceProxy.callSyncingServer(
      request,
      response,
      this.endpointResolver.resolveEndpointOrMethodIdentifier('GET', 'items/:uuid', request.params.uuid),
      request.body,
    )
  }
}
