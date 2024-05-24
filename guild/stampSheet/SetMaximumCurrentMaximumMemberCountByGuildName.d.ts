import { AcquireAction } from "../../core/model";
export default class SetMaximumCurrentMaximumMemberCountByGuildName extends AcquireAction {
    private readonly namespaceName;
    private readonly guildName;
    private readonly guildModelName;
    private readonly value;
    constructor(namespaceName: string, guildName: string, guildModelName: string, value?: number | null);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
