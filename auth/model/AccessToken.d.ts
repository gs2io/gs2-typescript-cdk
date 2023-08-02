import { AccessTokenOptions } from "./options/AccessTokenOptions";
export default class AccessToken {
    private readonly ownerId;
    private readonly userId;
    private readonly expire;
    private readonly timeOffset;
    constructor(ownerId: string, userId: string, expire: number, timeOffset: number, options?: AccessTokenOptions | null);
    properties(): {
        [name: string]: any;
    };
}
