import { ReceiveMemberRequestOptions } from "./options/ReceiveMemberRequestOptions";
export default class ReceiveMemberRequest {
    private readonly userId;
    private readonly targetGuildName;
    private readonly metadata;
    constructor(userId: string, targetGuildName: string, options?: ReceiveMemberRequestOptions | null);
    properties(): {
        [name: string]: any;
    };
}
