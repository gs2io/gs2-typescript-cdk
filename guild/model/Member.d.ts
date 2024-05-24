import { MemberOptions } from "./options/MemberOptions";
export default class Member {
    private readonly userId;
    private readonly roleName;
    constructor(userId: string, roleName: string, options?: MemberOptions | null);
    properties(): {
        [name: string]: any;
    };
}
