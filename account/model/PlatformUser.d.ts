import { PlatformUserOptions } from "./options/PlatformUserOptions";
export default class PlatformUser {
    private readonly type;
    private readonly userIdentifier;
    private readonly userId;
    constructor(type: number, userIdentifier: string, userId: string, options?: PlatformUserOptions | null);
    properties(): {
        [name: string]: any;
    };
}
