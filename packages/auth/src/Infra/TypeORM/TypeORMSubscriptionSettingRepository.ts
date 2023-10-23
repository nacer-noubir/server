import { inject, injectable } from 'inversify'
import { Repository } from 'typeorm'
import TYPES from '../../Bootstrap/Types'

import { SubscriptionSetting } from '../../Domain/Setting/SubscriptionSetting'
import { SubscriptionSettingRepositoryInterface } from '../../Domain/Setting/SubscriptionSettingRepositoryInterface'

@injectable()
export class TypeORMSubscriptionSettingRepository implements SubscriptionSettingRepositoryInterface {
  constructor(
    @inject(TYPES.Auth_ORMSubscriptionSettingRepository)
    private ormRepository: Repository<SubscriptionSetting>,
  ) {}

  async findAllBySubscriptionUuid(userSubscriptionUuid: string): Promise<SubscriptionSetting[]> {
    return this.ormRepository
      .createQueryBuilder('setting')
      .where('setting.user_subscription_uuid = :userSubscriptionUuid', {
        userSubscriptionUuid,
      })
      .getMany()
  }

  async save(subscriptionSetting: SubscriptionSetting): Promise<SubscriptionSetting> {
    return this.ormRepository.save(subscriptionSetting)
  }

  async findOneByUuid(uuid: string): Promise<SubscriptionSetting | null> {
    return this.ormRepository
      .createQueryBuilder('setting')
      .where('setting.uuid = :uuid', {
        uuid,
      })
      .getOne()
  }

  async findLastByNameAndUserSubscriptionUuid(
    name: string,
    userSubscriptionUuid: string,
  ): Promise<SubscriptionSetting | null> {
    return this.ormRepository
      .createQueryBuilder('setting')
      .where('setting.name = :name AND setting.user_subscription_uuid = :userSubscriptionUuid', {
        name,
        userSubscriptionUuid,
      })
      .orderBy('updated_at', 'DESC')
      .getOne()
  }
}
