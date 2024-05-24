import GuildModelRef from "./GuildModelRef";
import IncreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName";
import SetMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName";
import DecreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    guildModel(guildModelName: string): GuildModelRef;
    increaseMaximumCurrentMaximumMemberCountByGuildName(guildModelName: string, guildName: string, value?: number | null): IncreaseMaximumCurrentMaximumMemberCountByGuildName;
    setMaximumCurrentMaximumMemberCountByGuildName(guildName: string, guildModelName: string, value?: number | null): SetMaximumCurrentMaximumMemberCountByGuildName;
    decreaseMaximumCurrentMaximumMemberCountByGuildName(guildModelName: string, guildName: string, value?: number | null): DecreaseMaximumCurrentMaximumMemberCountByGuildName;
    grn(): string;
}
