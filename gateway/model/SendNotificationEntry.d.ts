import { SendNotificationEntryOptions } from "./options/SendNotificationEntryOptions";
export default class SendNotificationEntry {
    private readonly userId;
    private readonly issuer;
    private readonly subject;
    private readonly payload;
    private readonly enableTransferMobileNotification;
    private readonly sound;
    constructor(userId: string, issuer: string, subject: string, payload: string, enableTransferMobileNotification: boolean, options?: SendNotificationEntryOptions | null);
    properties(): {
        [name: string]: any;
    };
}
