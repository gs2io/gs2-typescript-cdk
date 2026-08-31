import { LastGuildMasterActivityOptions } from "./options/LastGuildMasterActivityOptions";
export default class LastGuildMasterActivity {
    private readonly userId;
    private readonly revision;
    constructor(userId: string, options?: LastGuildMasterActivityOptions | null);
    properties(): {
        [name: string]: any;
    };
}
