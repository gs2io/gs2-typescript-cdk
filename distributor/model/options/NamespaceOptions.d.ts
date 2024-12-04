import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    assumeUserId?: string | null;
    autoRunStampSheetNotification?: NotificationSetting | null;
    autoRunTransactionNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
