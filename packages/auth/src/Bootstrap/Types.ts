const TYPES = {
  Auth_Logger: Symbol.for('Auth_Logger'),
  Auth_Redis: Symbol.for('Auth_Redis'),
  Auth_SNS: Symbol.for('Auth_SNS'),
  Auth_SQS: Symbol.for('Auth_SQS'),
  Auth_S3: Symbol.for('Auth_S3'),
  // Mapping
  Auth_SessionTracePersistenceMapper: Symbol.for('Auth_SessionTracePersistenceMapper'),
  Auth_AuthenticatorChallengePersistenceMapper: Symbol.for('Auth_AuthenticatorChallengePersistenceMapper'),
  Auth_AuthenticatorPersistenceMapper: Symbol.for('Auth_AuthenticatorPersistenceMapper'),
  Auth_AuthenticatorHttpMapper: Symbol.for('Auth_AuthenticatorHttpMapper'),
  Auth_CacheEntryPersistenceMapper: Symbol.for('Auth_CacheEntryPersistenceMapper'),
  Auth_SharedVaultUserPersistenceMapper: Symbol.for('Auth_SharedVaultUserPersistenceMapper'),
  Auth_SettingHttpMapper: Symbol.for('Auth_SettingHttpMapper'),
  Auth_SubscriptionSettingHttpMapper: Symbol.for('Auth_SubscriptionSettingHttpMapper'),
  Auth_SubscriptionSettingPersistenceMapper: Symbol.for('Auth_SubscriptionSettingPersistenceMapper'),
  Auth_SettingPersistenceMapper: Symbol.for('Auth_SettingPersistenceMapper'),
  // Controller
  Auth_ControllerContainer: Symbol.for('Auth_ControllerContainer'),
  Auth_AuthController: Symbol.for('Auth_AuthController'),
  Auth_AuthenticatorsController: Symbol.for('Auth_AuthenticatorsController'),
  Auth_SubscriptionInvitesController: Symbol.for('Auth_SubscriptionInvitesController'),
  Auth_UserRequestsController: Symbol.for('Auth_UserRequestsController'),
  // Repositories
  Auth_UserRepository: Symbol.for('Auth_UserRepository'),
  Auth_SessionRepository: Symbol.for('Auth_SessionRepository'),
  Auth_EphemeralSessionRepository: Symbol.for('Auth_EphemeralSessionRepository'),
  Auth_RevokedSessionRepository: Symbol.for('Auth_RevokedSessionRepository'),
  Auth_SettingRepository: Symbol.for('Auth_SettingRepository'),
  Auth_SubscriptionSettingRepository: Symbol.for('Auth_SubscriptionSettingRepository'),
  Auth_OfflineSettingRepository: Symbol.for('Auth_OfflineSettingRepository'),
  Auth_LockRepository: Symbol.for('Auth_LockRepository'),
  Auth_RoleRepository: Symbol.for('Auth_RoleRepository'),
  Auth_UserSubscriptionRepository: Symbol.for('Auth_UserSubscriptionRepository'),
  Auth_OfflineUserSubscriptionRepository: Symbol.for('Auth_OfflineUserSubscriptionRepository'),
  Auth_SubscriptionTokenRepository: Symbol.for('Auth_SubscriptionTokenRepository'),
  Auth_OfflineSubscriptionTokenRepository: Symbol.for('Auth_OfflineSubscriptionTokenRepository'),
  Auth_SharedSubscriptionInvitationRepository: Symbol.for('Auth_SharedSubscriptionInvitationRepository'),
  Auth_PKCERepository: Symbol.for('Auth_PKCERepository'),
  Auth_SessionTraceRepository: Symbol.for('Auth_SessionTraceRepository'),
  Auth_AuthenticatorRepository: Symbol.for('Auth_AuthenticatorRepository'),
  Auth_AuthenticatorChallengeRepository: Symbol.for('Auth_AuthenticatorChallengeRepository'),
  Auth_CacheEntryRepository: Symbol.for('Auth_CacheEntryRepository'),
  Auth_SharedVaultUserRepository: Symbol.for('Auth_SharedVaultUserRepository'),
  // ORM
  Auth_ORMOfflineSettingRepository: Symbol.for('Auth_ORMOfflineSettingRepository'),
  Auth_ORMOfflineUserSubscriptionRepository: Symbol.for('Auth_ORMOfflineUserSubscriptionRepository'),
  Auth_ORMRevokedSessionRepository: Symbol.for('Auth_ORMRevokedSessionRepository'),
  Auth_ORMRoleRepository: Symbol.for('Auth_ORMRoleRepository'),
  Auth_ORMSessionRepository: Symbol.for('Auth_ORMSessionRepository'),
  Auth_ORMSettingRepository: Symbol.for('Auth_ORMSettingRepository'),
  Auth_ORMSharedSubscriptionInvitationRepository: Symbol.for('Auth_ORMSharedSubscriptionInvitationRepository'),
  Auth_ORMSubscriptionSettingRepository: Symbol.for('Auth_ORMSubscriptionSettingRepository'),
  Auth_ORMUserRepository: Symbol.for('Auth_ORMUserRepository'),
  Auth_ORMUserSubscriptionRepository: Symbol.for('Auth_ORMUserSubscriptionRepository'),
  Auth_ORMSessionTraceRepository: Symbol.for('Auth_ORMSessionTraceRepository'),
  Auth_ORMAuthenticatorRepository: Symbol.for('Auth_ORMAuthenticatorRepository'),
  Auth_ORMAuthenticatorChallengeRepository: Symbol.for('Auth_ORMAuthenticatorChallengeRepository'),
  Auth_ORMCacheEntryRepository: Symbol.for('Auth_ORMCacheEntryRepository'),
  Auth_ORMSharedVaultUserRepository: Symbol.for('Auth_ORMSharedVaultUserRepository'),
  // Middleware
  Auth_RequiredCrossServiceTokenMiddleware: Symbol.for('Auth_RequiredCrossServiceTokenMiddleware'),
  Auth_OptionalCrossServiceTokenMiddleware: Symbol.for('Auth_OptionalCrossServiceTokenMiddleware'),
  Auth_ApiGatewayOfflineAuthMiddleware: Symbol.for('Auth_ApiGatewayOfflineAuthMiddleware'),
  Auth_OfflineUserAuthMiddleware: Symbol.for('Auth_OfflineUserAuthMiddleware'),
  Auth_LockMiddleware: Symbol.for('Auth_LockMiddleware'),
  Auth_SessionMiddleware: Symbol.for('Auth_SessionMiddleware'),
  // Projectors
  Auth_SessionProjector: Symbol.for('Auth_SessionProjector'),
  Auth_UserProjector: Symbol.for('Auth_UserProjector'),
  Auth_RoleProjector: Symbol.for('Auth_RoleProjector'),
  Auth_PermissionProjector: Symbol.for('Auth_PermissionProjector'),
  // env vars
  Auth_JWT_SECRET: Symbol.for('Auth_JWT_SECRET'),
  Auth_LEGACY_JWT_SECRET: Symbol.for('Auth_LEGACY_JWT_SECRET'),
  Auth_AUTH_JWT_SECRET: Symbol.for('Auth_AUTH_JWT_SECRET'),
  Auth_AUTH_JWT_TTL: Symbol.for('Auth_AUTH_JWT_TTL'),
  Auth_VALET_TOKEN_SECRET: Symbol.for('Auth_VALET_TOKEN_SECRET'),
  Auth_VALET_TOKEN_TTL: Symbol.for('Auth_VALET_TOKEN_TTL'),
  Auth_WEB_SOCKET_CONNECTION_TOKEN_SECRET: Symbol.for('Auth_WEB_SOCKET_CONNECTION_TOKEN_SECRET'),
  Auth_WEB_SOCKET_CONNECTION_TOKEN_TTL: Symbol.for('Auth_WEB_SOCKET_CONNECTION_TOKEN_TTL'),
  Auth_ENCRYPTION_SERVER_KEY: Symbol.for('Auth_ENCRYPTION_SERVER_KEY'),
  Auth_ACCESS_TOKEN_AGE: Symbol.for('Auth_ACCESS_TOKEN_AGE'),
  Auth_REFRESH_TOKEN_AGE: Symbol.for('Auth_REFRESH_TOKEN_AGE'),
  Auth_EPHEMERAL_SESSION_AGE: Symbol.for('Auth_EPHEMERAL_SESSION_AGE'),
  Auth_MAX_LOGIN_ATTEMPTS: Symbol.for('Auth_MAX_LOGIN_ATTEMPTS'),
  Auth_FAILED_LOGIN_LOCKOUT: Symbol.for('Auth_FAILED_LOGIN_LOCKOUT'),
  Auth_PSEUDO_KEY_PARAMS_KEY: Symbol.for('Auth_PSEUDO_KEY_PARAMS_KEY'),
  Auth_REDIS_URL: Symbol.for('Auth_REDIS_URL'),
  Auth_DISABLE_USER_REGISTRATION: Symbol.for('Auth_DISABLE_USER_REGISTRATION'),
  Auth_SNS_TOPIC_ARN: Symbol.for('Auth_SNS_TOPIC_ARN'),
  Auth_SNS_AWS_REGION: Symbol.for('Auth_SNS_AWS_REGION'),
  Auth_SQS_QUEUE_URL: Symbol.for('Auth_SQS_QUEUE_URL'),
  Auth_SQS_AWS_REGION: Symbol.for('Auth_SQS_AWS_REGION'),
  Auth_VERSION: Symbol.for('Auth_VERSION'),
  Auth_SESSION_TRACE_DAYS_TTL: Symbol.for('Auth_SESSION_TRACE_DAYS_TTL'),
  Auth_U2F_RELYING_PARTY_ID: Symbol.for('Auth_U2F_RELYING_PARTY_ID'),
  Auth_U2F_RELYING_PARTY_NAME: Symbol.for('Auth_U2F_RELYING_PARTY_NAME'),
  Auth_U2F_EXPECTED_ORIGIN: Symbol.for('Auth_U2F_EXPECTED_ORIGIN'),
  Auth_U2F_REQUIRE_USER_VERIFICATION: Symbol.for('Auth_U2F_REQUIRE_USER_VERIFICATION'),
  Auth_READONLY_USERS: Symbol.for('Auth_READONLY_USERS'),
  Auth_IS_CONFIGURED_FOR_HOME_SERVER_OR_SELF_HOSTING: Symbol.for('Auth_IS_CONFIGURED_FOR_HOME_SERVER_OR_SELF_HOSTING'),
  // use cases
  Auth_AuthenticateUser: Symbol.for('Auth_AuthenticateUser'),
  Auth_AuthenticateRequest: Symbol.for('Auth_AuthenticateRequest'),
  Auth_RefreshSessionToken: Symbol.for('Auth_RefreshSessionToken'),
  Auth_VerifyMFA: Symbol.for('Auth_VerifyMFA'),
  Auth_SignIn: Symbol.for('Auth_SignIn'),
  Auth_ClearLoginAttempts: Symbol.for('Auth_ClearLoginAttempts'),
  Auth_IncreaseLoginAttempts: Symbol.for('Auth_IncreaseLoginAttempts'),
  Auth_GetUserKeyParams: Symbol.for('Auth_GetUserKeyParams'),
  Auth_UpdateUser: Symbol.for('Auth_UpdateUser'),
  Auth_Register: Symbol.for('Auth_Register'),
  Auth_GetActiveSessionsForUser: Symbol.for('Auth_GetActiveSessionsForUser'),
  Auth_DeleteOtherSessionsForUser: Symbol.for('Auth_DeleteOtherSessionsForUser'),
  Auth_DeleteSessionForUser: Symbol.for('Auth_DeleteSessionForUser'),
  Auth_ChangeCredentials: Symbol.for('Auth_ChangePassword'),
  Auth_GetSettings: Symbol.for('Auth_GetSettings'),
  Auth_GetSubscriptionSettings: Symbol.for('Auth_GetSubscriptionSettings'),
  Auth_GetRegularSubscriptionForUser: Symbol.for('Auth_GetRegularSubscriptionForUser'),
  Auth_GetSharedSubscriptionForUser: Symbol.for('Auth_GetSharedSubscriptionForUser'),
  Auth_GetAllSettingsForUser: Symbol.for('Auth_GetAllSettingsForUser'),
  Auth_GetSetting: Symbol.for('Auth_GetSetting'),
  Auth_GetUserFeatures: Symbol.for('Auth_GetUserFeatures'),
  Auth_DeleteSetting: Symbol.for('Auth_DeleteSetting'),
  Auth_DeleteAccount: Symbol.for('Auth_DeleteAccount'),
  Auth_GetUserSubscription: Symbol.for('Auth_GetUserSubscription'),
  Auth_GetUserOfflineSubscription: Symbol.for('Auth_GetUserOfflineSubscription'),
  Auth_CreateSubscriptionToken: Symbol.for('Auth_CreateSubscriptionToken'),
  Auth_AuthenticateSubscriptionToken: Symbol.for('Auth_AuthenticateSubscriptionToken'),
  Auth_CreateOfflineSubscriptionToken: Symbol.for('Auth_CreateOfflineSubscriptionToken'),
  Auth_AuthenticateOfflineSubscriptionToken: Symbol.for('Auth_AuthenticateOfflineSubscriptionToken'),
  Auth_CreateValetToken: Symbol.for('Auth_CreateValetToken'),
  Auth_CreateListedAccount: Symbol.for('Auth_CreateListedAccount'),
  Auth_InviteToSharedSubscription: Symbol.for('Auth_InviteToSharedSubscription'),
  Auth_AcceptSharedSubscriptionInvitation: Symbol.for('Auth_AcceptSharedSubscriptionInvitation'),
  Auth_DeclineSharedSubscriptionInvitation: Symbol.for('Auth_DeclineSharedSubscriptionInvitation'),
  Auth_CancelSharedSubscriptionInvitation: Symbol.for('Auth_CancelSharedSubscriptionInvitation'),
  Auth_ListSharedSubscriptionInvitations: Symbol.for('Auth_ListSharedSubscriptionInvitations'),
  Auth_VerifyPredicate: Symbol.for('Auth_VerifyPredicate'),
  Auth_CreateCrossServiceToken: Symbol.for('Auth_CreateCrossServiceToken'),
  Auth_ProcessUserRequest: Symbol.for('Auth_ProcessUserRequest'),
  Auth_TraceSession: Symbol.for('Auth_TraceSession'),
  Auth_CleanupSessionTraces: Symbol.for('Auth_CleanupSessionTraces'),
  Auth_CleanupExpiredSessions: Symbol.for('Auth_CleanupExpiredSessions'),
  Auth_PersistStatistics: Symbol.for('Auth_PersistStatistics'),
  Auth_GenerateAuthenticatorRegistrationOptions: Symbol.for('Auth_GenerateAuthenticatorRegistrationOptions'),
  Auth_VerifyAuthenticatorRegistrationResponse: Symbol.for('Auth_VerifyAuthenticatorRegistrationResponse'),
  Auth_GenerateAuthenticatorAuthenticationOptions: Symbol.for('Auth_GenerateAuthenticatorAuthenticationOptions'),
  Auth_VerifyAuthenticatorAuthenticationResponse: Symbol.for('Auth_VerifyAuthenticatorAuthenticationResponse'),
  Auth_ListAuthenticators: Symbol.for('Auth_ListAuthenticators'),
  Auth_DeleteAuthenticator: Symbol.for('Auth_DeleteAuthenticator'),
  Auth_SetSettingValue: Symbol.for('Auth_SetSettingValue'),
  Auth_GenerateRecoveryCodes: Symbol.for('Auth_GenerateRecoveryCodes'),
  Auth_GetSubscriptionSetting: Symbol.for('Auth_GetSubscriptionSetting'),
  Auth_SetSubscriptionSettingValue: Symbol.for('Auth_SetSubscriptionSettingValue'),
  Auth_ApplyDefaultSubscriptionSettings: Symbol.for('Auth_ApplyDefaultSubscriptionSettings'),
  Auth_ApplyDefaultSettings: Symbol.for('Auth_ApplyDefaultSettings'),
  Auth_ActivatePremiumFeatures: Symbol.for('Auth_ActivatePremiumFeatures'),
  Auth_SignInWithRecoveryCodes: Symbol.for('Auth_SignInWithRecoveryCodes'),
  Auth_GetUserKeyParamsRecovery: Symbol.for('Auth_GetUserKeyParamsRecovery'),
  Auth_UpdateStorageQuotaUsedForUser: Symbol.for('Auth_UpdateStorageQuotaUsedForUser'),
  Auth_AddSharedVaultUser: Symbol.for('Auth_AddSharedVaultUser'),
  Auth_RemoveSharedVaultUser: Symbol.for('Auth_RemoveSharedVaultUser'),
  Auth_DesignateSurvivor: Symbol.for('Auth_DesignateSurvivor'),
  Auth_GetSharedOrRegularSubscriptionForUser: Symbol.for('Auth_GetSharedOrRegularSubscriptionForUser'),
  Auth_DisableEmailSettingBasedOnEmailSubscription: Symbol.for('Auth_DisableEmailSettingBasedOnEmailSubscription'),
  Auth_TriggerPostSettingUpdateActions: Symbol.for('Auth_TriggerPostSettingUpdateActions'),
  Auth_TriggerEmailBackupForUser: Symbol.for('Auth_TriggerEmailBackupForUser'),
  Auth_TriggerEmailBackupForAllUsers: Symbol.for('Auth_TriggerEmailBackupForAllUsers'),
  Auth_DeleteAccountsFromCSVFile: Symbol.for('Auth_DeleteAccountsFromCSVFile'),
  Auth_RenewSharedSubscriptions: Symbol.for('Auth_RenewSharedSubscriptions'),
  Auth_FixStorageQuotaForUser: Symbol.for('Auth_FixStorageQuotaForUser'),
  // Handlers
  Auth_AccountDeletionRequestedEventHandler: Symbol.for('Auth_AccountDeletionRequestedEventHandler'),
  Auth_AccountDeletionVerificationPassedEventHandler: Symbol.for('Auth_AccountDeletionVerificationPassedEventHandler'),
  Auth_SubscriptionPurchasedEventHandler: Symbol.for('Auth_SubscriptionPurchasedEventHandler'),
  Auth_SubscriptionCancelledEventHandler: Symbol.for('Auth_SubscriptionCancelledEventHandler'),
  Auth_SubscriptionReassignedEventHandler: Symbol.for('Auth_SubscriptionReassignedEventHandler'),
  Auth_SubscriptionRenewedEventHandler: Symbol.for('Auth_SubscriptionRenewedEventHandler'),
  Auth_SubscriptionRefundedEventHandler: Symbol.for('Auth_SubscriptionRefundedEventHandler'),
  Auth_SubscriptionExpiredEventHandler: Symbol.for('Auth_SubscriptionExpiredEventHandler'),
  Auth_SubscriptionSyncRequestedEventHandler: Symbol.for('Auth_SubscriptionSyncRequestedEventHandler'),
  Auth_ExtensionKeyGrantedEventHandler: Symbol.for('Auth_ExtensionKeyGrantedEventHandler'),
  Auth_FileUploadedEventHandler: Symbol.for('Auth_FileUploadedEventHandler'),
  Auth_SharedVaultFileUploadedEventHandler: Symbol.for('Auth_SharedVaultFileUploadedEventHandler'),
  Auth_SharedVaultFileMovedEventHandler: Symbol.for('Auth_SharedVaultFileMovedEventHandler'),
  Auth_FileRemovedEventHandler: Symbol.for('Auth_FileRemovedEventHandler'),
  Auth_SharedVaultFileRemovedEventHandler: Symbol.for('Auth_SharedVaultFileRemovedEventHandler'),
  Auth_ListedAccountCreatedEventHandler: Symbol.for('Auth_ListedAccountCreatedEventHandler'),
  Auth_ListedAccountDeletedEventHandler: Symbol.for('Auth_ListedAccountDeletedEventHandler'),
  Auth_UserDisabledSessionUserAgentLoggingEventHandler: Symbol.for(
    'Auth_UserDisabledSessionUserAgentLoggingEventHandler',
  ),
  Auth_SharedSubscriptionInvitationCreatedEventHandler: Symbol.for(
    'Auth_SharedSubscriptionInvitationCreatedEventHandler',
  ),
  Auth_PredicateVerificationRequestedEventHandler: Symbol.for('Auth_PredicateVerificationRequestedEventHandler'),
  Auth_EmailSubscriptionUnsubscribedEventHandler: Symbol.for('Auth_EmailSubscriptionUnsubscribedEventHandler'),
  Auth_PaymentsAccountDeletedEventHandler: Symbol.for('Auth_PaymentsAccountDeletedEventHandler'),
  Auth_UserAddedToSharedVaultEventHandler: Symbol.for('Auth_UserAddedToSharedVaultEventHandler'),
  Auth_UserRemovedFromSharedVaultEventHandler: Symbol.for('Auth_UserRemovedFromSharedVaultEventHandler'),
  Auth_UserDesignatedAsSurvivorInSharedVaultEventHandler: Symbol.for(
    'Auth_UserDesignatedAsSurvivorInSharedVaultEventHandler',
  ),
  Auth_UserInvitedToSharedVaultEventHandler: Symbol.for('Auth_UserInvitedToSharedVaultEventHandler'),
  Auth_FileQuotaRecalculatedEventHandler: Symbol.for('Auth_FileQuotaRecalculatedEventHandler'),
  // Services
  Auth_DeviceDetector: Symbol.for('Auth_DeviceDetector'),
  Auth_SessionService: Symbol.for('Auth_SessionService'),
  Auth_OfflineSettingService: Symbol.for('Auth_OfflineSettingService'),
  Auth_AuthResponseFactory20161215: Symbol.for('Auth_AuthResponseFactory20161215'),
  Auth_AuthResponseFactory20190520: Symbol.for('Auth_AuthResponseFactory20190520'),
  Auth_AuthResponseFactory20200115: Symbol.for('Auth_AuthResponseFactory20200115'),
  Auth_AuthResponseFactoryResolver: Symbol.for('Auth_AuthResponseFactoryResolver'),
  Auth_KeyParamsFactory: Symbol.for('Auth_KeyParamsFactory'),
  Auth_SessionTokenDecoder: Symbol.for('Auth_SessionTokenDecoder'),
  Auth_FallbackSessionTokenDecoder: Symbol.for('Auth_FallbackSessionTokenDecoder'),
  Auth_CrossServiceTokenDecoder: Symbol.for('Auth_CrossServiceTokenDecoder'),
  Auth_OfflineUserTokenDecoder: Symbol.for('Auth_OfflineUserTokenDecoder'),
  Auth_OfflineUserTokenEncoder: Symbol.for('Auth_OfflineUserTokenEncoder'),
  Auth_CrossServiceTokenEncoder: Symbol.for('Auth_CrossServiceTokenEncoder'),
  Auth_SessionTokenEncoder: Symbol.for('Auth_SessionTokenEncoder'),
  Auth_ValetTokenEncoder: Symbol.for('Auth_ValetTokenEncoder'),
  Auth_WebSocketConnectionTokenDecoder: Symbol.for('Auth_WebSocketConnectionTokenDecoder'),
  Auth_AuthenticationMethodResolver: Symbol.for('Auth_AuthenticationMethodResolver'),
  Auth_DomainEventPublisher: Symbol.for('Auth_DomainEventPublisher'),
  Auth_DomainEventSubscriber: Symbol.for('Auth_DomainEventSubscriber'),
  Auth_DomainEventFactory: Symbol.for('Auth_DomainEventFactory'),
  Auth_DomainEventMessageHandler: Symbol.for('Auth_DomainEventMessageHandler'),
  Auth_Crypter: Symbol.for('Auth_Crypter'),
  Auth_CryptoNode: Symbol.for('Auth_CryptoNode'),
  Auth_Timer: Symbol.for('Auth_Timer'),
  Auth_ContenDecoder: Symbol.for('Auth_ContenDecoder'),
  Auth_WebSocketsClientService: Symbol.for('Auth_WebSocketClientService'),
  Auth_RoleService: Symbol.for('Auth_RoleService'),
  Auth_RoleToSubscriptionMap: Symbol.for('Auth_RoleToSubscriptionMap'),
  Auth_SettingsAssociationService: Symbol.for('Auth_SettingsAssociationService'),
  Auth_SubscriptionSettingsAssociationService: Symbol.for('Auth_SubscriptionSettingsAssociationService'),
  Auth_FeatureService: Symbol.for('Auth_FeatureService'),
  Auth_SettingCrypter: Symbol.for('Auth_SettingCrypter'),
  Auth_ProtocolVersionSelector: Symbol.for('Auth_ProtocolVersionSelector'),
  Auth_BooleanSelector: Symbol.for('Auth_BooleanSelector'),
  Auth_BaseAuthController: Symbol.for('Auth_BaseAuthController'),
  Auth_BaseAuthenticatorsController: Symbol.for('Auth_BaseAuthenticatorsController'),
  Auth_BaseSubscriptionInvitesController: Symbol.for('Auth_BaseSubscriptionInvitesController'),
  Auth_BaseUserRequestsController: Symbol.for('Auth_BaseUserRequestsController'),
  Auth_BaseWebSocketsController: Symbol.for('Auth_BaseWebSocketsController'),
  Auth_BaseSessionsController: Symbol.for('Auth_BaseSessionsController'),
  Auth_BaseValetTokenController: Symbol.for('Auth_BaseValetTokenController'),
  Auth_BaseUsersController: Symbol.for('Auth_BaseUsersController'),
  Auth_BaseAdminController: Symbol.for('Auth_BaseAdminController'),
  Auth_BaseSubscriptionTokensController: Symbol.for('Auth_BaseSubscriptionTokensController'),
  Auth_BaseSubscriptionSettingsController: Symbol.for('Auth_BaseSubscriptionSettingsController'),
  Auth_BaseSettingsController: Symbol.for('Auth_BaseSettingsController'),
  Auth_BaseSessionController: Symbol.for('Auth_BaseSessionController'),
  Auth_BaseOfflineController: Symbol.for('Auth_BaseOfflineController'),
  Auth_BaseListedController: Symbol.for('Auth_BaseListedController'),
  Auth_BaseFeaturesController: Symbol.for('Auth_BaseFeaturesController'),
  Auth_CSVFileReader: Symbol.for('Auth_CSVFileReader'),
}

export default TYPES
