import { AcquireAction } from "../../core/model";
export default class SetBigItemByUserId extends AcquireAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, count: string, userId?: string | null);
}
