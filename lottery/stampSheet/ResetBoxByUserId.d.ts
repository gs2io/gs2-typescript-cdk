import { AcquireAction } from "../../core/model";
export default class ResetBoxByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly prizeTableName;
    private readonly userId;
    constructor(namespaceName: string, prizeTableName: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
