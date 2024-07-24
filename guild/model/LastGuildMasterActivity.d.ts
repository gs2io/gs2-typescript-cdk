import { LastGuildMasterActivityOptions } from "./options/LastGuildMasterActivityOptions";
export default class LastGuildMasterActivity {
    private readonly userId;
    constructor(userId: string, options?: LastGuildMasterActivityOptions | null);
    properties(): {
        [name: string]: any;
    };
}
