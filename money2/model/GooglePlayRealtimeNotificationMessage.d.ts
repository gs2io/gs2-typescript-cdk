import { GooglePlayRealtimeNotificationMessageOptions } from "./options/GooglePlayRealtimeNotificationMessageOptions";
export default class GooglePlayRealtimeNotificationMessage {
    private readonly data;
    private readonly messageId;
    private readonly publishTime;
    constructor(data: string, messageId: string, publishTime: string, options?: GooglePlayRealtimeNotificationMessageOptions | null);
    properties(): {
        [name: string]: any;
    };
}
