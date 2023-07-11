import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
export default class ItemModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly itemName;
    constructor(namespaceName: string, inventoryName: string, itemName: string);
    acquireItemSet(acquireCount: number, expiresAt: number, createNewItemSet: boolean, itemSetName?: string | null, userId?: string | null): AcquireItemSetByUserId;
    addReferenceOf(itemSetName: string, referenceOf: string, userId?: string | null): AddReferenceOfByUserId;
    deleteReferenceOf(itemSetName: string, referenceOf: string, userId?: string | null): DeleteReferenceOfByUserId;
    consumeItemSet(consumeCount: number, itemSetName?: string | null, userId?: string | null): ConsumeItemSetByUserId;
    verifyReferenceOf(itemSetName: string, referenceOf: string, verifyType: string, userId?: string | null): VerifyReferenceOfByUserId;
    grn(): string;
}
