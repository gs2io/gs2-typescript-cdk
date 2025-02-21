import IncreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName";
import SetMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName";
import DecreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName";
import VerifyCurrentMaximumMemberCountByGuildName from "../stampSheet/VerifyCurrentMaximumMemberCountByGuildName";
import { GuildVerifyType } from "../stampSheet/enums/GuildVerifyType";
import VerifyIncludeMemberByUserId from "../stampSheet/VerifyIncludeMemberByUserId";
export default class GuildRef {
    private readonly namespaceName;
    private readonly guildModelName;
    private readonly guildName;
    constructor(namespaceName: string, guildModelName: string, guildName: string);
    increaseMaximumCurrentMaximumMemberCountByGuildName(value?: number | null): IncreaseMaximumCurrentMaximumMemberCountByGuildName;
    setMaximumCurrentMaximumMemberCountByGuildName(value?: number | null): SetMaximumCurrentMaximumMemberCountByGuildName;
    decreaseMaximumCurrentMaximumMemberCountByGuildName(value?: number | null): DecreaseMaximumCurrentMaximumMemberCountByGuildName;
    verifyCurrentMaximumMemberCountByGuildName(verifyType: GuildVerifyType, value?: number | null, multiplyValueSpecifyingQuantity?: boolean | null): VerifyCurrentMaximumMemberCountByGuildName;
    verifyIncludeMember(verifyType: GuildVerifyType, guildName: string, userId?: string): VerifyIncludeMemberByUserId;
    grn(): string;
}
