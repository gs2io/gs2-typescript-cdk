import { NotificationSettingEnable } from "./nums/NotificationSettingEnable";
export interface NotificationSettingOptions {
    gatewayNamespaceId?: string | null;
    enableTransferMobileNotification?: boolean | null;
    sound?: string | null;
    enable?: NotificationSettingEnable | null;
}
