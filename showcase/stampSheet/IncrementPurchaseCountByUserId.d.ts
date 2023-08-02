import { ConsumeAction } from "../../core/model";
export default class IncrementPurchaseCountByUserId extends ConsumeAction {
    constructor(namespaceName: string, showcaseName: string, displayItemName: string, count: number, userId?: string | null);
}
