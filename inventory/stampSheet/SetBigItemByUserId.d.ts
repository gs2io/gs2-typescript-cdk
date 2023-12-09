import { AcquireAction } from "../../core/model";
export default class SetBigItemByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly itemName;
    private readonly count;
    constructor(namespaceName: string, inventoryName: string, itemName: string, count: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
