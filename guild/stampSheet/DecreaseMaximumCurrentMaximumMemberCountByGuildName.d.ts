import { ConsumeAction } from "../../core/model";
export default class DecreaseMaximumCurrentMaximumMemberCountByGuildName extends ConsumeAction {
    private readonly namespaceName;
    private readonly guildModelName;
    private readonly guildName;
    private readonly value;
    constructor(namespaceName: string, guildModelName: string, guildName: string, value?: number | null);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
