import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    enableRating?: boolean | null;
    createGatheringTriggerRealtimeNamespaceId?: string | null;
    createGatheringTriggerScriptId?: string | null;
    completeMatchmakingTriggerRealtimeNamespaceId?: string | null;
    completeMatchmakingTriggerScriptId?: string | null;
    changeRatingScript?: ScriptSetting | null;
    joinNotification?: NotificationSetting | null;
    leaveNotification?: NotificationSetting | null;
    completeNotification?: NotificationSetting | null;
    changeRatingNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
