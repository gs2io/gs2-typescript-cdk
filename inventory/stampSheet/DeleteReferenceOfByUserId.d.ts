import { AcquireAction } from "../../core/model";
export default class DeleteReferenceOfByUserId extends AcquireAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, referenceOf: string, itemSetName?: string | null, userId?: string | null);
}
