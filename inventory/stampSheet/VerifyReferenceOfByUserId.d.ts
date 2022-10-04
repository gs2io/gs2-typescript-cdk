import { ConsumeAction } from "../../core/model";
export default class VerifyReferenceOfByUserId extends ConsumeAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, itemSetName: string, referenceOf: string, verifyType: string, userId?: string);
}
