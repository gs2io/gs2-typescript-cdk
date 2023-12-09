import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyItemSetByUserId from "../stampSheet/VerifyItemSetByUserId";
import { ItemSetVerifyType } from "../stampSheet/enum/ItemSetVerifyType";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
import { ReferenceOfVerifyType } from "../stampSheet/enum/ReferenceOfVerifyType";
export default class ItemModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly itemName;
    constructor(namespaceName: string, inventoryName: string, itemName: string);
    acquireItemSet(acquireCount: number, expiresAt?: number | null, createNewItemSet?: boolean | null, itemSetName?: string | null, userId?: string): AcquireItemSetByUserId;
    addReferenceOf(referenceOf: string, itemSetName?: string | null, userId?: string): AddReferenceOfByUserId;
    deleteReferenceOf(referenceOf: string, itemSetName?: string | null, userId?: string): DeleteReferenceOfByUserId;
    consumeItemSet(consumeCount: number, itemSetName?: string | null, userId?: string): ConsumeItemSetByUserId;
    verifyItemSet(verifyType: ItemSetVerifyType, count: number, itemSetName?: string | null, userId?: string): VerifyItemSetByUserId;
    verifyReferenceOf(referenceOf: string, verifyType: ReferenceOfVerifyType, itemSetName?: string | null, userId?: string): VerifyReferenceOfByUserId;
    grn(): string;
}
