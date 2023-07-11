import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    createNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
