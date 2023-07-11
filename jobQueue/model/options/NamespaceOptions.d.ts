import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    enableAutoRun?: boolean | null;
    pushNotification?: NotificationSetting | null;
    runNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
