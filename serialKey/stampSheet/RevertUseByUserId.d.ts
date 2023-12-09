import { AcquireAction } from "../../core/model";
export default class RevertUseByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly code;
    constructor(namespaceName: string, code: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
