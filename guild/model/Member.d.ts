import { MemberOptions } from "./options/MemberOptions";
export default class Member {
    private readonly userId;
    private readonly roleName;
    private readonly metadata;
    constructor(userId: string, roleName: string, options?: MemberOptions | null);
    properties(): {
        [name: string]: any;
    };
}
