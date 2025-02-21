import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
import { NamespaceEnableDisconnectDetection } from "../enums/NamespaceEnableDisconnectDetection";
import { NamespaceEnableCollaborateSeasonRating } from "../enums/NamespaceEnableCollaborateSeasonRating";
export interface NamespaceOptions {
    description?: string | null;
    enableRating?: boolean | null;
    enableDisconnectDetection?: NamespaceEnableDisconnectDetection | null;
    disconnectDetectionTimeoutSeconds?: number | null;
    createGatheringTriggerRealtimeNamespaceId?: string | null;
    createGatheringTriggerScriptId?: string | null;
    completeMatchmakingTriggerRealtimeNamespaceId?: string | null;
    completeMatchmakingTriggerScriptId?: string | null;
    enableCollaborateSeasonRating?: NamespaceEnableCollaborateSeasonRating | null;
    collaborateSeasonRatingNamespaceId?: string | null;
    collaborateSeasonRatingTtl?: number | null;
    changeRatingScript?: ScriptSetting | null;
    joinNotification?: NotificationSetting | null;
    leaveNotification?: NotificationSetting | null;
    completeNotification?: NotificationSetting | null;
    changeRatingNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
