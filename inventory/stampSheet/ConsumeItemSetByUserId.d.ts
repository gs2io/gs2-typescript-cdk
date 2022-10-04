import { ConsumeAction } from "../../core/model";
export default class ConsumeItemSetByUserId extends ConsumeAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, consumeCount: number, itemSetName?: string | null, userId?: string);
}
