import { IgnoreUsersOptions } from "./options/IgnoreUsersOptions";
export default class IgnoreUsers {
    private readonly guildModelName;
    private readonly users;
    private readonly revision;
    constructor(guildModelName: string, options?: IgnoreUsersOptions | null);
    properties(): {
        [name: string]: any;
    };
}
