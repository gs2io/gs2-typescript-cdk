import { ConsumeAction } from "../../core/model";
export default class VerifySimpleItemByUserId extends ConsumeAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, verifyType: string, count: number, userId?: string | null);
}
