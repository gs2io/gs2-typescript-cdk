import { AccessTokenOptions } from "./options/AccessTokenOptions";
export default class AccessToken {
    private readonly ownerId;
    private readonly userId;
    private readonly realUserId;
    private readonly expire;
    private readonly timeOffset;
    private readonly federationFromUserId;
    private readonly federationPolicyDocument;
    constructor(ownerId: string, userId: string, realUserId: string, expire: number, timeOffset: number, options?: AccessTokenOptions | null);
    properties(): {
        [name: string]: any;
    };
}
