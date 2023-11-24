export default class NotificationSetting {
    gatewayNamespaceId: string | null;
    enableTransferMobileNotification: boolean | null;
    sound: string | null;
    constructor(gatewayNamespaceId?: string | null, enableTransferMobileNotification?: boolean | null, sound?: string | null);
    properties(): {
        [name: string]: any;
    };
}
