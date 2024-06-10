import GuildModelRef from "./GuildModelRef";
import IncreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName";
import SetMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName";
import DecreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName";
import VerifyCurrentMaximumMemberCountByGuildName from "../stampSheet/VerifyCurrentMaximumMemberCountByGuildName";
import { GuildVerifyType } from "../stampSheet/enum/GuildVerifyType";
import VerifyIncludeMemberByUserId from "../stampSheet/VerifyIncludeMemberByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    guildModel(guildModelName: string): GuildModelRef;
    increaseMaximumCurrentMaximumMemberCountByGuildName(guildModelName: string, guildName: string, value?: number | null): IncreaseMaximumCurrentMaximumMemberCountByGuildName;
    setMaximumCurrentMaximumMemberCountByGuildName(guildName: string, guildModelName: string, value?: number | null): SetMaximumCurrentMaximumMemberCountByGuildName;
    decreaseMaximumCurrentMaximumMemberCountByGuildName(guildModelName: string, guildName: string, value?: number | null): DecreaseMaximumCurrentMaximumMemberCountByGuildName;
    verifyCurrentMaximumMemberCountByGuildName(guildModelName: string, guildName: string, verifyType: GuildVerifyType, value?: number | null, multiplyValueSpecifyingQuantity?: boolean | null): VerifyCurrentMaximumMemberCountByGuildName;
    verifyIncludeMember(guildModelName: string, verifyType: GuildVerifyType, guildName?: string | null, userId?: string): VerifyIncludeMemberByUserId;
    grn(): string;
}
