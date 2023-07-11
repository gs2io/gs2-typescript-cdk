import { ConsumeAction } from "../../core/model";
export default class VerifyReferenceOfByUserId extends ConsumeAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, referenceOf: string, verifyType: string, itemSetName?: string | null, userId?: string | null);
}
