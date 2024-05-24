import IncreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName";
import SetMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName";
import DecreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName";
export default class GuildRef {
    private readonly namespaceName;
    private readonly guildModelName;
    private readonly guildName;
    constructor(namespaceName: string, guildModelName: string, guildName: string);
    increaseMaximumCurrentMaximumMemberCountByGuildName(value?: number | null): IncreaseMaximumCurrentMaximumMemberCountByGuildName;
    setMaximumCurrentMaximumMemberCountByGuildName(value?: number | null): SetMaximumCurrentMaximumMemberCountByGuildName;
    decreaseMaximumCurrentMaximumMemberCountByGuildName(value?: number | null): DecreaseMaximumCurrentMaximumMemberCountByGuildName;
    grn(): string;
}
