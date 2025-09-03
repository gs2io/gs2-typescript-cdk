import TransactionSetting from "../../../core/model/TransactionSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    enableAutoRun?: boolean | null;
    pushNotification?: NotificationSetting | null;
    runNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
