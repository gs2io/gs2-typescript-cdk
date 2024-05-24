import AdMob from "../AdMob";
import UnityAd from "../UnityAd";
import AppLovinMax from "../AppLovinMax";
import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    admob?: AdMob | null;
    unityAd?: UnityAd | null;
    appLovinMaxes?: AppLovinMax[] | null;
    description?: string | null;
    acquirePointScript?: ScriptSetting | null;
    consumePointScript?: ScriptSetting | null;
    changePointNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
