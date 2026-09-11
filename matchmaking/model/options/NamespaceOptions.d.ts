import TransactionSetting from "../../../core/model/TransactionSetting";
import TransactionSettingV2 from "../TransactionSettingV2";
import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
import { NamespaceEnableDisconnectDetection } from "../enums/NamespaceEnableDisconnectDetection";
import { NamespaceCreateGatheringTriggerType } from "../enums/NamespaceCreateGatheringTriggerType";
import { NamespaceCompleteMatchmakingTriggerType } from "../enums/NamespaceCompleteMatchmakingTriggerType";
import { NamespaceEnableCollaborateSeasonRating } from "../enums/NamespaceEnableCollaborateSeasonRating";
export interface NamespaceOptions {
    description?: string | null;
    /** @deprecated */
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    enableRating?: boolean | null;
    enableDisconnectDetection?: NamespaceEnableDisconnectDetection | null;
    disconnectDetectionTimeoutSeconds?: number | null;
    createGatheringTriggerType?: NamespaceCreateGatheringTriggerType | null;
    createGatheringTriggerRealtimeNamespaceId?: string | null;
    createGatheringTriggerScriptId?: string | null;
    completeMatchmakingTriggerType?: NamespaceCompleteMatchmakingTriggerType | null;
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
