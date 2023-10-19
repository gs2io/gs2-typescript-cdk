import { ConsumeAction } from "../../core/model";
export default class VerifyItemSetByUserId extends ConsumeAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, verifyType: string, count: number, itemSetName?: string | null, userId?: string | null);
}
