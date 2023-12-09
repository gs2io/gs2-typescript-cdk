import { AcquireAction } from "../../core/model";
export default class AcquireBigItemByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly itemName;
    private readonly acquireCount;
    constructor(namespaceName: string, inventoryName: string, itemName: string, acquireCount: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
