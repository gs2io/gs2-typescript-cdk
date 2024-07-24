import { VerifyAction } from "../../core/model";
import { GuildVerifyType } from "./enum/GuildVerifyType";
export default class VerifyCurrentMaximumMemberCountByGuildName extends VerifyAction {
    private readonly namespaceName;
    private readonly guildModelName;
    private readonly guildName;
    private readonly verifyType;
    private readonly value;
    private readonly multiplyValueSpecifyingQuantity;
    constructor(namespaceName: string, guildModelName: string, guildName: string, verifyType: GuildVerifyType, value?: number | null, multiplyValueSpecifyingQuantity?: boolean | null);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
