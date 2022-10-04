import { AcquireAction } from "../../core/model";
export default class AddReferenceOfByUserId extends AcquireAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, itemSetName: string, referenceOf: string, userId?: string);
}
