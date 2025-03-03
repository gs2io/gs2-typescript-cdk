import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    depositBalanceScript?: ScriptSetting | null;
    withdrawBalanceScript?: ScriptSetting | null;
    subscribeScript?: string | null;
    renewScript?: string | null;
    unsubscribeScript?: string | null;
    takeOverScript?: ScriptSetting | null;
    changeSubscriptionStatusNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
