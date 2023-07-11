import TransactionSetting from "../../../core/model/TransactionSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    isAutomaticDeletingEnabled?: boolean | null;
    transactionSetting?: TransactionSetting | null;
    receiveMessageScript?: ScriptSetting | null;
    readMessageScript?: ScriptSetting | null;
    deleteMessageScript?: ScriptSetting | null;
    receiveNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
    queueNamespaceId?: string | null;
    keyId?: string | null;
}
