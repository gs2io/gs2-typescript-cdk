import { ConsumeAction } from "../../core/model";
export default class VerifyBigItemByUserId extends ConsumeAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, verifyType: string, count: string, userId?: string | null);
}
