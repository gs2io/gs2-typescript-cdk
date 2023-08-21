import { AcquireAction } from "../../core/model";
export default class AcquireBigItemByUserId extends AcquireAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, acquireCount: string, userId?: string | null);
}
