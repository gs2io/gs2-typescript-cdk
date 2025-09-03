import TransactionSetting from "../../../core/model/TransactionSetting";
import AdMob from "../AdMob";
import UnityAd from "../UnityAd";
import AppLovinMax from "../AppLovinMax";
import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    admob?: AdMob | null;
    unityAd?: UnityAd | null;
    appLovinMaxes?: AppLovinMax[] | null;
    acquirePointScript?: ScriptSetting | null;
    consumePointScript?: ScriptSetting | null;
    changePointNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
