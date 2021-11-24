import { AccessService } from '../services/access-service';
import AddonService from '../services/addon-service';
import ProjectService from '../services/project-service';
import StateService from '../services/state-service';
import StrategyService from '../services/strategy-service';
import TagTypeService from '../services/tag-type-service';
import TagService from '../services/tag-service';
import ClientMetricsService from '../services/client-metrics';
import ContextService from '../services/context-service';
import VersionService from '../services/version-service';
import { ApiTokenService } from '../services/api-token-service';
import { EmailService } from '../services/email-service';
import UserService from '../services/user-service';
import ResetTokenService from '../services/reset-token-service';
import FeatureTypeService from '../services/feature-type-service';
import EventService from '../services/event-service';
import HealthService from '../services/health-service';
import SettingService from '../services/setting-service';
import SessionService from '../services/session-service';
import UserFeedbackService from '../services/user-feedback-service';
import FeatureToggleService from '../services/feature-toggle-service';
import EnvironmentService from '../services/environment-service';
import FeatureTagService from '../services/feature-tag-service';
import ProjectHealthService from '../services/project-health-service';
import ClientMetricsServiceV2 from '../services/client-metrics/client-metrics-service-v2';
import UserSplashService from '../services/user-splash-service';

export interface IUnleashServices {
    accessService: AccessService;
    addonService: AddonService;
    apiTokenService: ApiTokenService;
    clientMetricsService: ClientMetricsService;
    clientMetricsServiceV2: ClientMetricsServiceV2;
    contextService: ContextService;
    emailService: EmailService;
    environmentService: EnvironmentService;
    eventService: EventService;
    featureTagService: FeatureTagService;
    featureToggleService: FeatureToggleService;
    featureToggleServiceV2: FeatureToggleService; // deprecated
    featureTypeService: FeatureTypeService;
    healthService: HealthService;
    projectHealthService: ProjectHealthService;
    projectService: ProjectService;
    resetTokenService: ResetTokenService;
    sessionService: SessionService;
    settingService: SettingService;
    stateService: StateService;
    strategyService: StrategyService;
    tagService: TagService;
    tagTypeService: TagTypeService;
    userFeedbackService: UserFeedbackService;
    userService: UserService;
    versionService: VersionService;
    userSplashService: UserSplashService;
}
