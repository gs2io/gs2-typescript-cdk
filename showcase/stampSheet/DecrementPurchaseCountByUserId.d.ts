import { AcquireAction } from "../../core/model";
export default class DecrementPurchaseCountByUserId extends AcquireAction {
    constructor(namespaceName: string, showcaseName: string, displayItemName: string, count: number, userId?: string | null);
}
