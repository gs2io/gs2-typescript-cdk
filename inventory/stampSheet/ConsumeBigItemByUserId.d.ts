import { ConsumeAction } from "../../core/model";
export default class ConsumeBigItemByUserId extends ConsumeAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, consumeCount: string, userId?: string | null);
}
