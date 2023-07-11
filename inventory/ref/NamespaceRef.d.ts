import InventoryModelRef from "./InventoryModelRef";
import SimpleInventoryModelRef from "./SimpleInventoryModelRef";
import AddCapacityByUserId from "../stampSheet/AddCapacityByUserId";
import SetCapacityByUserId from "../stampSheet/SetCapacityByUserId";
import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import AcquireSimpleItemsByUserId from "../stampSheet/AcquireSimpleItemsByUserId";
import AcquireCount from "../model/AcquireCount";
import ConsumeCount from "../model/ConsumeCount";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
import ConsumeSimpleItemsByUserId from "../stampSheet/ConsumeSimpleItemsByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    inventoryModel(inventoryName: string): InventoryModelRef;
    simpleInventoryModel(inventoryName: string): SimpleInventoryModelRef;
    addCapacity(inventoryName: string, addCapacityValue: number, userId?: string | null): AddCapacityByUserId;
    setCapacity(inventoryName: string, newCapacityValue: number, userId?: string | null): SetCapacityByUserId;
    acquireItemSet(inventoryName: string, itemName: string, acquireCount: number, expiresAt: number, createNewItemSet: boolean, itemSetName?: string | null, userId?: string | null): AcquireItemSetByUserId;
    addReferenceOf(inventoryName: string, itemName: string, itemSetName: string, referenceOf: string, userId?: string | null): AddReferenceOfByUserId;
    deleteReferenceOf(inventoryName: string, itemName: string, itemSetName: string, referenceOf: string, userId?: string | null): DeleteReferenceOfByUserId;
    acquireSimpleItems(inventoryName: string, acquireCounts: AcquireCount[], userId?: string | null): AcquireSimpleItemsByUserId;
    consumeItemSet(inventoryName: string, itemName: string, consumeCount: number, itemSetName?: string | null, userId?: string | null): ConsumeItemSetByUserId;
    verifyReferenceOf(inventoryName: string, itemName: string, itemSetName: string, referenceOf: string, verifyType: string, userId?: string | null): VerifyReferenceOfByUserId;
    consumeSimpleItems(inventoryName: string, consumeCounts: ConsumeCount[], userId?: string | null): ConsumeSimpleItemsByUserId;
    grn(): string;
}
