import TransactionSetting from "../../../core/model/TransactionSetting";
import TransactionSettingV2 from "../TransactionSettingV2";
import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    /** @deprecated */
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    depositBalanceScript?: ScriptSetting | null;
    withdrawBalanceScript?: ScriptSetting | null;
    verifyReceiptScript?: ScriptSetting | null;
    subscribeScript?: string | null;
    renewScript?: string | null;
    unsubscribeScript?: string | null;
    takeOverScript?: ScriptSetting | null;
    changeSubscriptionStatusNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
