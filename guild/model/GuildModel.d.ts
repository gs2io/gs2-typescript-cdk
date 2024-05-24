import RoleModel from "./RoleModel";
import { GuildModelOptions } from "./options/GuildModelOptions";
export default class GuildModel {
    private readonly name;
    private readonly defaultMaximumMemberCount;
    private readonly maximumMemberCount;
    private readonly roles;
    private readonly guildMasterRole;
    private readonly guildMemberDefaultRole;
    private readonly rejoinCoolTimeMinutes;
    private readonly metadata;
    constructor(name: string, defaultMaximumMemberCount: number, maximumMemberCount: number, roles: RoleModel[], guildMasterRole: string, guildMemberDefaultRole: string, rejoinCoolTimeMinutes: number, options?: GuildModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
