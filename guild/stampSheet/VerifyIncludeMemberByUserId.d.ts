import { ConsumeAction } from "../../core/model";
import { GuildVerifyType } from "./enum/GuildVerifyType";
export default class VerifyIncludeMemberByUserId extends ConsumeAction {
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
