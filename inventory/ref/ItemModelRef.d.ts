import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
export default class ItemModelRef {
    private namespaceName;
    private inventoryName;
    private itemName;
    constructor(namespaceName: string, inventoryName: string, itemName: string);
    acquireItemSet(acquireCount: number, expiresAt: number, createNewItemSet: boolean, itemSetName?: string | null, userId?: string): AcquireItemSetByUserId;
    addReferenceOf(itemSetName: string, referenceOf: string, userId?: string): AddReferenceOfByUserId;
    consumeItemSet(consumeCount: number, itemSetName?: string | null, userId?: string): ConsumeItemSetByUserId;
    grn(): string;
}
