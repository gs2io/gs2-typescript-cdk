import AdMob from "../AdMob";
import UnityAd from "../UnityAd";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    admob?: AdMob | null;
    unityAd?: UnityAd | null;
    description?: string | null;
    logSetting?: LogSetting | null;
}
