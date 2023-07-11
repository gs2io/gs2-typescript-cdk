import { PlayerOptions } from "./options/PlayerOptions";
export default class Player {
    private readonly userId;
    private readonly roleName;
    private readonly attributes;
    private readonly denyUserIds;
    constructor(userId: string, roleName: string, options?: PlayerOptions | null);
    properties(): {
        [name: string]: any;
    };
}
