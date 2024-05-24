import RoleModelRef from "./RoleModelRef";
import IncreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName";
import SetMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName";
import DecreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName";
export default class GuildModelRef {
    private readonly namespaceName;
    private readonly guildModelName;
    constructor(namespaceName: string, guildModelName: string);
    roleModel(): RoleModelRef;
    increaseMaximumCurrentMaximumMemberCountByGuildName(guildName: string, value?: number | null): IncreaseMaximumCurrentMaximumMemberCountByGuildName;
    setMaximumCurrentMaximumMemberCountByGuildName(guildName: string, value?: number | null): SetMaximumCurrentMaximumMemberCountByGuildName;
    decreaseMaximumCurrentMaximumMemberCountByGuildName(guildName: string, value?: number | null): DecreaseMaximumCurrentMaximumMemberCountByGuildName;
    grn(): string;
}
