import AdMob from "../AdMob";
import UnityAd from "../UnityAd";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    admob?: AdMob | null;
    unityAd?: UnityAd | null;
    description?: string | null;
    changePointNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
