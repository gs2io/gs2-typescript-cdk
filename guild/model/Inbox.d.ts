import { InboxOptions } from "./options/InboxOptions";
export default class Inbox {
    private readonly guildName;
    private readonly fromUserIds;
    private readonly revision;
    constructor(guildName: string, options?: InboxOptions | null);
    properties(): {
        [name: string]: any;
    };
}
