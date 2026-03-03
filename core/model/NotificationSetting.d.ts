import { NotificationSettingOptions } from "./NotificationSettingOptions";
import { NotificationSettingEnable } from "./nums/NotificationSettingEnable";
export default class NotificationSetting {
    gatewayNamespaceId: string | null;
    enableTransferMobileNotification: boolean | null;
    sound: string | null;
    enable: NotificationSettingEnable | null;
    constructor(options?: NotificationSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
