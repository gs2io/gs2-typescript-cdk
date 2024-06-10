import RoleModelRef from "./RoleModelRef";
import IncreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName";
import SetMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName";
import DecreaseMaximumCurrentMaximumMemberCountByGuildName from "../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName";
import VerifyCurrentMaximumMemberCountByGuildName from "../stampSheet/VerifyCurrentMaximumMemberCountByGuildName";
import { GuildVerifyType } from "../stampSheet/enum/GuildVerifyType";
import VerifyIncludeMemberByUserId from "../stampSheet/VerifyIncludeMemberByUserId";
export default class GuildModelRef {
    private readonly namespaceName;
    private readonly guildModelName;
    constructor(namespaceName: string, guildModelName: string);
    roleModel(): RoleModelRef;
    increaseMaximumCurrentMaximumMemberCountByGuildName(guildName: string, value?: number | null): IncreaseMaximumCurrentMaximumMemberCountByGuildName;
    setMaximumCurrentMaximumMemberCountByGuildName(guildName: string, value?: number | null): SetMaximumCurrentMaximumMemberCountByGuildName;
    decreaseMaximumCurrentMaximumMemberCountByGuildName(guildName: string, value?: number | null): DecreaseMaximumCurrentMaximumMemberCountByGuildName;
    verifyCurrentMaximumMemberCountByGuildName(guildName: string, verifyType: GuildVerifyType, value?: number | null, multiplyValueSpecifyingQuantity?: boolean | null): VerifyCurrentMaximumMemberCountByGuildName;
    verifyIncludeMember(verifyType: GuildVerifyType, guildName?: string | null, userId?: string): VerifyIncludeMemberByUserId;
    grn(): string;
}
