export default class NotificationSetting {
    gatewayNamespaceId: string;
    enableTransferMobileNotification: boolean | null;
    sound: string | null;
    constructor(gatewayNamespaceId: string, enableTransferMobileNotification?: boolean | null, sound?: string | null);
    properties(): {
        [name: string]: any;
    };
}
