import { MobileNotificationMessageOptions } from "./options/MobileNotificationMessageOptions";
export default class MobileNotificationMessage {
    private readonly locale;
    private readonly title;
    private readonly message;
    constructor(options?: MobileNotificationMessageOptions | null);
    properties(): {
        [name: string]: any;
    };
}
