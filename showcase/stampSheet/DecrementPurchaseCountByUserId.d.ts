import { AcquireAction } from "../../core/model";
export default class DecrementPurchaseCountByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly showcaseName;
    private readonly displayItemName;
    private readonly userId;
    private readonly count;
    constructor(namespaceName: string, showcaseName: string, displayItemName: string, count: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
