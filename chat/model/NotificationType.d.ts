import { NotificationTypeOptions } from "./options/NotificationTypeOptions";
export default class NotificationType {
    private readonly category;
    private readonly enableTransferMobilePushNotification;
    constructor(category: number, enableTransferMobilePushNotification: boolean, options?: NotificationTypeOptions | null);
    properties(): {
        [name: string]: any;
    };
}
