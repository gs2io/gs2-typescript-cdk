import { IgnoreUserOptions } from "./options/IgnoreUserOptions";
export default class IgnoreUser {
    private readonly userId;
    constructor(userId: string, options?: IgnoreUserOptions | null);
    properties(): {
        [name: string]: any;
    };
}
