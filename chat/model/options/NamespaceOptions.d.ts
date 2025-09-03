import TransactionSetting from "../../../core/model/TransactionSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    allowCreateRoom?: boolean | null;
    messageLifeTimeDays?: number | null;
    postMessageScript?: ScriptSetting | null;
    createRoomScript?: ScriptSetting | null;
    deleteRoomScript?: ScriptSetting | null;
    subscribeRoomScript?: ScriptSetting | null;
    unsubscribeRoomScript?: ScriptSetting | null;
    postNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
