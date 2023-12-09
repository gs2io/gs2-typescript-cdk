import { AcquireAction } from "../../core/model";
export default class DeleteReceiveStatusByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly bonusModelName;
    private readonly userId;
    constructor(namespaceName: string, bonusModelName: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
