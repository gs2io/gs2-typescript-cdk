import TransactionSetting from "../../../core/model/TransactionSetting";
import TransactionSettingV2 from "../TransactionSettingV2";
import SyncSetting from "../SyncSetting";
import StateMachineSetting from "../StateMachineSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    /** @deprecated */
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    syncSetting?: SyncSetting | null;
    stateMachineSetting?: StateMachineSetting | null;
    createNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
