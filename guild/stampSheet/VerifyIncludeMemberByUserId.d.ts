import { VerifyAction } from "../../core/model";
import { GuildVerifyType } from "./enums/GuildVerifyType";
export default class VerifyIncludeMemberByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly guildModelName;
    private readonly userId;
    private readonly verifyType;
    private readonly guildName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, guildModelName: string, verifyType: GuildVerifyType, guildName?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
