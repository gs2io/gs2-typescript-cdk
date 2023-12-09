import { AcquireAction } from "../../core/model";
export default class ForceReDrawByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly showcaseName;
    private readonly userId;
    constructor(namespaceName: string, showcaseName: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
