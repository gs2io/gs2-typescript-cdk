import { AcquireAction } from "../../core/model";
export default class ForceReDrawByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly showcaseName;
    private readonly userId;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, showcaseName: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
