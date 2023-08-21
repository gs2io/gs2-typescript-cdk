import { ScriptSetting } from "../../../core/model";
import { NotificationSetting } from "../../../core/model";
import { LogSetting } from "../../../core/model";
export interface NamespaceCreateGatheringTriggerTypeIsNoneOptions {
    description?: string | null;
    changeRatingScript?: ScriptSetting | null;
    joinNotification?: NotificationSetting | null;
    leaveNotification?: NotificationSetting | null;
    completeNotification?: NotificationSetting | null;
    changeRatingNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
    revision?: number | null;
}
