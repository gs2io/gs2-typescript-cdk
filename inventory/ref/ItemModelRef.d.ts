import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyItemSetByUserId from "../stampSheet/VerifyItemSetByUserId";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
export default class ItemModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly itemName;
    constructor(namespaceName: string, inventoryName: string, itemName: string);
    acquireItemSet(acquireCount: number, expiresAt?: number | null, createNewItemSet?: boolean | null, itemSetName?: string | null, userId?: string | null): AcquireItemSetByUserId;
    addReferenceOf(referenceOf: string, itemSetName?: string | null, userId?: string | null): AddReferenceOfByUserId;
    deleteReferenceOf(referenceOf: string, itemSetName?: string | null, userId?: string | null): DeleteReferenceOfByUserId;
    consumeItemSet(consumeCount: number, itemSetName?: string | null, userId?: string | null): ConsumeItemSetByUserId;
    verifyItemSet(verifyType: string, count: number, itemSetName?: string | null, userId?: string | null): VerifyItemSetByUserId;
    verifyReferenceOf(referenceOf: string, verifyType: string, itemSetName?: string | null, userId?: string | null): VerifyReferenceOfByUserId;
    grn(): string;
}
