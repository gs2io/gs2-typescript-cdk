import { NotificationSettingOptions } from "./NotificationSettingOptions";
export default class NotificationSetting {
    gatewayNamespaceId: string | null;
    enableTransferMobileNotification: boolean | null;
    sound: string | null;
    constructor(options?: NotificationSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
