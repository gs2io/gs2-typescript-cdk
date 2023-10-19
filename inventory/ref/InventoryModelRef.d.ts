import ItemModelRef from "./ItemModelRef";
import AddCapacityByUserId from "../stampSheet/AddCapacityByUserId";
import SetCapacityByUserId from "../stampSheet/SetCapacityByUserId";
import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import VerifyInventoryCurrentMaxCapacityByUserId from "../stampSheet/VerifyInventoryCurrentMaxCapacityByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyItemSetByUserId from "../stampSheet/VerifyItemSetByUserId";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
export default class InventoryModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    constructor(namespaceName: string, inventoryName: string);
    itemModel(itemName: string): ItemModelRef;
    addCapacity(addCapacityValue: number, userId?: string | null): AddCapacityByUserId;
    setCapacity(newCapacityValue: number, userId?: string | null): SetCapacityByUserId;
    acquireItemSet(itemName: string, acquireCount: number, expiresAt?: number | null, createNewItemSet?: boolean | null, itemSetName?: string | null, userId?: string | null): AcquireItemSetByUserId;
    addReferenceOf(itemName: string, referenceOf: string, itemSetName?: string | null, userId?: string | null): AddReferenceOfByUserId;
    deleteReferenceOf(itemName: string, referenceOf: string, itemSetName?: string | null, userId?: string | null): DeleteReferenceOfByUserId;
    verifyInventoryCurrentMaxCapacity(verifyType: string, currentInventoryMaxCapacity: number, userId?: string | null): VerifyInventoryCurrentMaxCapacityByUserId;
    consumeItemSet(itemName: string, consumeCount: number, itemSetName?: string | null, userId?: string | null): ConsumeItemSetByUserId;
    verifyItemSet(itemName: string, verifyType: string, count: number, itemSetName?: string | null, userId?: string | null): VerifyItemSetByUserId;
    verifyReferenceOf(itemName: string, referenceOf: string, verifyType: string, itemSetName?: string | null, userId?: string | null): VerifyReferenceOfByUserId;
    grn(): string;
}
