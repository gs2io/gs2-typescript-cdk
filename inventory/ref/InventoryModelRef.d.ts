import ItemModelRef from "./ItemModelRef";
import AddCapacityByUserId from "../stampSheet/AddCapacityByUserId";
import SetCapacityByUserId from "../stampSheet/SetCapacityByUserId";
import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
export default class InventoryModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    constructor(namespaceName: string, inventoryName: string);
    itemModel(itemName: string): ItemModelRef;
    addCapacity(addCapacityValue: number, userId?: string | null): AddCapacityByUserId;
    setCapacity(newCapacityValue: number, userId?: string | null): SetCapacityByUserId;
    acquireItemSet(itemName: string, acquireCount: number, expiresAt: number, createNewItemSet: boolean, itemSetName?: string | null, userId?: string | null): AcquireItemSetByUserId;
    addReferenceOf(itemName: string, itemSetName: string, referenceOf: string, userId?: string | null): AddReferenceOfByUserId;
    deleteReferenceOf(itemName: string, itemSetName: string, referenceOf: string, userId?: string | null): DeleteReferenceOfByUserId;
    consumeItemSet(itemName: string, consumeCount: number, itemSetName?: string | null, userId?: string | null): ConsumeItemSetByUserId;
    verifyReferenceOf(itemName: string, itemSetName: string, referenceOf: string, verifyType: string, userId?: string | null): VerifyReferenceOfByUserId;
    grn(): string;
}
