import TransactionSetting from "../../../core/model/TransactionSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    createNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
