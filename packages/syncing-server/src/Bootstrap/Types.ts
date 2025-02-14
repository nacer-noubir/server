const TYPES = {
  Sync_DBConnection: Symbol.for('Sync_DBConnection'),
  Sync_Logger: Symbol.for('Sync_Logger'),
  Sync_Redis: Symbol.for('Sync_Redis'),
  Sync_SNS: Symbol.for('Sync_SNS'),
  Sync_SQS: Symbol.for('Sync_SQS'),
  Sync_S3: Symbol.for('Sync_S3'),
  Sync_Env: Symbol.for('Sync_Env'),
  // Repositories
  Sync_SQLItemRepository: Symbol.for('Sync_SQLItemRepository'),
  Sync_SharedVaultRepository: Symbol.for('Sync_SharedVaultRepository'),
  Sync_SharedVaultInviteRepository: Symbol.for('Sync_SharedVaultInviteRepository'),
  Sync_SharedVaultUserRepository: Symbol.for('Sync_SharedVaultUserRepository'),
  Sync_NotificationRepository: Symbol.for('Sync_NotificationRepository'),
  Sync_MessageRepository: Symbol.for('Sync_MessageRepository'),
  // ORM
  Sync_ORMItemRepository: Symbol.for('Sync_ORMItemRepository'),
  Sync_ORMSharedVaultRepository: Symbol.for('Sync_ORMSharedVaultRepository'),
  Sync_ORMSharedVaultInviteRepository: Symbol.for('Sync_ORMSharedVaultInviteRepository'),
  Sync_ORMSharedVaultUserRepository: Symbol.for('Sync_ORMSharedVaultUserRepository'),
  Sync_ORMNotificationRepository: Symbol.for('Sync_ORMNotificationRepository'),
  Sync_ORMMessageRepository: Symbol.for('Sync_ORMMessageRepository'),
  // Middleware
  Sync_AuthMiddleware: Symbol.for('Sync_AuthMiddleware'),
  // env vars
  Sync_REDIS_URL: Symbol.for('Sync_REDIS_URL'),
  Sync_SNS_TOPIC_ARN: Symbol.for('Sync_SNS_TOPIC_ARN'),
  Sync_SNS_AWS_REGION: Symbol.for('Sync_SNS_AWS_REGION'),
  Sync_SQS_QUEUE_URL: Symbol.for('Sync_SQS_QUEUE_URL'),
  Sync_SQS_AWS_REGION: Symbol.for('Sync_SQS_AWS_REGION'),
  Sync_AUTH_JWT_SECRET: Symbol.for('Sync_AUTH_JWT_SECRET'),
  Sync_EXTENSIONS_SERVER_URL: Symbol.for('Sync_EXTENSIONS_SERVER_URL'),
  Sync_S3_AWS_REGION: Symbol.for('Sync_S3_AWS_REGION'),
  Sync_S3_BACKUP_BUCKET_NAME: Symbol.for('Sync_S3_BACKUP_BUCKET_NAME'),
  Sync_EMAIL_ATTACHMENT_MAX_BYTE_SIZE: Symbol.for('Sync_EMAIL_ATTACHMENT_MAX_BYTE_SIZE'),
  Sync_REVISIONS_FREQUENCY: Symbol.for('Sync_REVISIONS_FREQUENCY'),
  Sync_FREE_REVISIONS_FREQUENCY: Symbol.for('Sync_FREE_REVISIONS_FREQUENCY'),
  Sync_VERSION: Symbol.for('Sync_VERSION'),
  Sync_CONTENT_SIZE_TRANSFER_LIMIT: Symbol.for('Sync_CONTENT_SIZE_TRANSFER_LIMIT'),
  Sync_MAX_ITEMS_LIMIT: Symbol.for('Sync_MAX_ITEMS_LIMIT'),
  Sync_FILE_UPLOAD_PATH: Symbol.for('Sync_FILE_UPLOAD_PATH'),
  Sync_VALET_TOKEN_SECRET: Symbol.for('Sync_VALET_TOKEN_SECRET'),
  Sync_VALET_TOKEN_TTL: Symbol.for('Sync_VALET_TOKEN_TTL'),
  Sync_IS_CONFIGURED_FOR_HOME_SERVER_OR_SELF_HOSTING: Symbol.for('Sync_IS_CONFIGURED_FOR_HOME_SERVER_OR_SELF_HOSTING'),
  // use cases
  Sync_SyncItems: Symbol.for('Sync_SyncItems'),
  Sync_CheckIntegrity: Symbol.for('Sync_CheckIntegrity'),
  Sync_GetItem: Symbol.for('Sync_GetItem'),
  Sync_GetSharedVaults: Symbol.for('Sync_GetSharedVaults'),
  Sync_CreateSharedVault: Symbol.for('Sync_CreateSharedVault'),
  Sync_DeleteSharedVault: Symbol.for('Sync_DeleteSharedVault'),
  Sync_DeleteSharedVaults: Symbol.for('Sync_DeleteSharedVaults'),
  Sync_CreateSharedVaultFileValetToken: Symbol.for('Sync_CreateSharedVaultFileValetToken'),
  Sync_GetSharedVaultUsers: Symbol.for('Sync_GetSharedVaultUsers'),
  Sync_AddUserToSharedVault: Symbol.for('Sync_AddUserToSharedVault'),
  Sync_AddNotificationForUser: Symbol.for('Sync_AddNotificationForUser'),
  Sync_RemoveNotificationsForUser: Symbol.for('Sync_RemoveNotificationsForUser'),
  Sync_RemoveSharedVaultUser: Symbol.for('Sync_RemoveSharedVaultUser'),
  Sync_InviteUserToSharedVault: Symbol.for('Sync_InviteUserToSharedVault'),
  Sync_UpdateSharedVaultInvite: Symbol.for('Sync_UpdateSharedVaultInvite'),
  Sync_AcceptInviteToSharedVault: Symbol.for('Sync_AcceptInviteToSharedVault'),
  Sync_DeclineInviteToSharedVault: Symbol.for('Sync_DeclineInviteToSharedVault'),
  Sync_DeleteSharedVaultInvitesToUser: Symbol.for('Sync_DeleteSharedVaultInvitesToUser'),
  Sync_DeleteSharedVaultInvitesSentByUser: Symbol.for('Sync_DeleteSharedVaultInvitesSentByUser'),
  Sync_GetSharedVaultInvitesSentByUser: Symbol.for('Sync_GetSharedVaultInvitesSentByUser'),
  Sync_GetSharedVaultInvitesSentToUser: Symbol.for('Sync_GetSharedVaultInvitesSentToUser'),
  Sync_GetMessagesSentToUser: Symbol.for('Sync_GetMessagesSentToUser'),
  Sync_GetMessagesSentByUser: Symbol.for('Sync_GetMessagesSentByUser'),
  Sync_SendMessageToUser: Symbol.for('Sync_SendMessageToUser'),
  Sync_DeleteAllMessagesSentToUser: Symbol.for('Sync_DeleteAllMessagesSentToUser'),
  Sync_DeleteMessage: Symbol.for('Sync_DeleteMessage'),
  Sync_SaveNewItem: Symbol.for('Sync_SaveNewItem'),
  Sync_UpdateExistingItem: Symbol.for('Sync_UpdateExistingItem'),
  Sync_GetItems: Symbol.for('Sync_GetItems'),
  Sync_SaveItems: Symbol.for('Sync_SaveItems'),
  Sync_GetUserNotifications: Symbol.for('Sync_GetUserNotifications'),
  Sync_DetermineSharedVaultOperationOnItem: Symbol.for('Sync_DetermineSharedVaultOperationOnItem'),
  Sync_UpdateStorageQuotaUsedInSharedVault: Symbol.for('Sync_UpdateStorageQuotaUsedInSharedVault'),
  Sync_AddNotificationsForUsers: Symbol.for('Sync_AddNotificationsForUsers'),
  Sync_SendEventToClient: Symbol.for('Sync_SendEventToClient'),
  Sync_SendEventToClients: Symbol.for('Sync_SendEventToClients'),
  Sync_RemoveItemsFromSharedVault: Symbol.for('Sync_RemoveItemsFromSharedVault'),
  Sync_DesignateSurvivor: Symbol.for('Sync_DesignateSurvivor'),
  Sync_RemoveUserFromSharedVaults: Symbol.for('Sync_RemoveUserFromSharedVaults'),
  Sync_TransferSharedVault: Symbol.for('Sync_TransferSharedVault'),
  Sync_TransferSharedVaultItems: Symbol.for('Sync_TransferSharedVaultItems'),
  Sync_DumpItem: Symbol.for('Sync_DumpItem'),
  // Handlers
  Sync_AccountDeletionRequestedEventHandler: Symbol.for('Sync_AccountDeletionRequestedEventHandler'),
  Sync_AccountDeletionVerificationRequestedEventHandler: Symbol.for(
    'Sync_AccountDeletionVerificationRequestedEventHandler',
  ),
  Sync_DuplicateItemSyncedEventHandler: Symbol.for('Sync_DuplicateItemSyncedEventHandler'),
  Sync_EmailBackupRequestedEventHandler: Symbol.for('Sync_EmailBackupRequestedEventHandler'),
  Sync_ItemRevisionCreationRequestedEventHandler: Symbol.for('Sync_ItemRevisionCreationRequestedEventHandler'),
  Sync_SharedVaultFileRemovedEventHandler: Symbol.for('Sync_SharedVaultFileRemovedEventHandler'),
  Sync_SharedVaultFileUploadedEventHandler: Symbol.for('Sync_SharedVaultFileUploadedEventHandler'),
  Sync_SharedVaultFileMovedEventHandler: Symbol.for('Sync_SharedVaultFileMovedEventHandler'),
  Sync_SharedVaultRemovedEventHandler: Symbol.for('Sync_SharedVaultRemovedEventHandler'),
  // Services
  Sync_MetricsStore: Symbol.for('Sync_MetricsStore'),
  Sync_ContentDecoder: Symbol.for('Sync_ContentDecoder'),
  Sync_DomainEventPublisher: Symbol.for('Sync_DomainEventPublisher'),
  Sync_DomainEventSubscriber: Symbol.for('Sync_DomainEventSubscriber'),
  Sync_DomainEventFactory: Symbol.for('Sync_DomainEventFactory'),
  Sync_DomainEventMessageHandler: Symbol.for('Sync_DomainEventMessageHandler'),
  Sync_HTTPClient: Symbol.for('Sync_HTTPClient'),
  Sync_Timer: Symbol.for('Sync_Timer'),
  Sync_SharedVaultValetTokenEncoder: Symbol.for('Sync_SharedVaultValetTokenEncoder'),
  Sync_SyncResponseFactory20161215: Symbol.for('Sync_SyncResponseFactory20161215'),
  Sync_SyncResponseFactory20200115: Symbol.for('Sync_SyncResponseFactory20200115'),
  Sync_SyncResponseFactoryResolver: Symbol.for('Sync_SyncResponseFactoryResolver'),
  Sync_ItemBackupService: Symbol.for('Sync_ItemBackupService'),
  Sync_ItemSaveValidator: Symbol.for('Sync_ItemSaveValidator'),
  Sync_OwnershipFilter: Symbol.for('Sync_OwnershipFilter'),
  Sync_SharedVaultFilter: Symbol.for('Sync_SharedVaultFilter'),
  Sync_SharedVaultSnjsFilter: Symbol.for('Sync_SharedVaultSnjsFilter'),
  Sync_TimeDifferenceFilter: Symbol.for('Sync_TimeDifferenceFilter'),
  Sync_ContentTypeFilter: Symbol.for('Sync_ContentTypeFilter'),
  Sync_ContentFilter: Symbol.for('Sync_ContentFilter'),
  Sync_ItemTransferCalculator: Symbol.for('Sync_ItemTransferCalculator'),
  Sync_ControllerContainer: Symbol.for('Sync_ControllerContainer'),
  Sync_BaseItemsController: Symbol.for('Sync_BaseItemsController'),
  Sync_BaseSharedVaultInvitesController: Symbol.for('Sync_BaseSharedVaultInvitesController'),
  Sync_BaseSharedVaultUsersController: Symbol.for('Sync_BaseSharedVaultUsersController'),
  Sync_BaseSharedVaultsController: Symbol.for('Sync_BaseSharedVaultsController'),
  Sync_BaseMessagesController: Symbol.for('Sync_BaseMessagesController'),
  // Mapping
  Sync_SharedVaultHttpMapper: Symbol.for('Sync_SharedVaultHttpMapper'),
  Sync_SharedVaultUserHttpMapper: Symbol.for('Sync_SharedVaultUserHttpMapper'),
  Sync_SharedVaultInviteHttpMapper: Symbol.for('Sync_SharedVaultInviteHttpMapper'),
  Sync_MessagePersistenceMapper: Symbol.for('Sync_MessagePersistenceMapper'),
  Sync_MessageHttpMapper: Symbol.for('Sync_MessageHttpMapper'),
  Sync_NotificationHttpMapper: Symbol.for('Sync_NotificationHttpMapper'),
  Sync_SyncResponseGRPCMapper: Symbol.for('Sync_SyncResponseGRPCMapper'),
  Sync_SQLItemPersistenceMapper: Symbol.for('Sync_SQLItemPersistenceMapper'),
  Sync_ItemHttpMapper: Symbol.for('Sync_ItemHttpMapper'),
  Sync_ItemHashHttpMapper: Symbol.for('Sync_ItemHashHttpMapper'),
  Sync_SavedItemHttpMapper: Symbol.for('Sync_SavedItemHttpMapper'),
  Sync_ItemConflictHttpMapper: Symbol.for('Sync_ItemConflictHttpMapper'),
  Sync_ItemBackupMapper: Symbol.for('Sync_ItemBackupMapper'),
  Sync_SharedVaultPersistenceMapper: Symbol.for('Sync_SharedVaultPersistenceMapper'),
  Sync_SharedVaultUserPersistenceMapper: Symbol.for('Sync_SharedVaultUserPersistenceMapper'),
  Sync_SharedVaultInvitePersistenceMapper: Symbol.for('Sync_SharedVaultInvitePersistenceMapper'),
  Sync_NotificationPersistenceMapper: Symbol.for('Sync_NotificationPersistenceMapper'),
}

export default TYPES
