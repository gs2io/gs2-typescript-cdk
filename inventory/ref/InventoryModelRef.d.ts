import ItemModelRef from "./ItemModelRef";
import AddCapacityByUserId from "../stampSheet/AddCapacityByUserId";
import SetCapacityByUserId from "../stampSheet/SetCapacityByUserId";
import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import VerifyInventoryCurrentMaxCapacityByUserId from "../stampSheet/VerifyInventoryCurrentMaxCapacityByUserId";
import { InventoryVerifyType } from "../stampSheet/enum/InventoryVerifyType";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyItemSetByUserId from "../stampSheet/VerifyItemSetByUserId";
import { ItemSetVerifyType } from "../stampSheet/enum/ItemSetVerifyType";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
import { ReferenceOfVerifyType } from "../stampSheet/enum/ReferenceOfVerifyType";
export default class InventoryModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    constructor(namespaceName: string, inventoryName: string);
    itemModel(itemName: string): ItemModelRef;
    addCapacity(addCapacityValue: number, userId?: string): AddCapacityByUserId;
    setCapacity(newCapacityValue: number, userId?: string): SetCapacityByUserId;
    acquireItemSet(itemName: string, acquireCount: number, expiresAt?: number | null, createNewItemSet?: boolean | null, itemSetName?: string | null, userId?: string): AcquireItemSetByUserId;
    addReferenceOf(itemName: string, referenceOf: string, itemSetName?: string | null, userId?: string): AddReferenceOfByUserId;
    deleteReferenceOf(itemName: string, referenceOf: string, itemSetName?: string | null, userId?: string): DeleteReferenceOfByUserId;
    verifyInventoryCurrentMaxCapacity(verifyType: InventoryVerifyType, currentInventoryMaxCapacity: number, userId?: string): VerifyInventoryCurrentMaxCapacityByUserId;
    consumeItemSet(itemName: string, consumeCount: number, itemSetName?: string | null, userId?: string): ConsumeItemSetByUserId;
    verifyItemSet(itemName: string, verifyType: ItemSetVerifyType, count: number, itemSetName?: string | null, userId?: string): VerifyItemSetByUserId;
    verifyReferenceOf(itemName: string, referenceOf: string, verifyType: ReferenceOfVerifyType, itemSetName?: string | null, userId?: string): VerifyReferenceOfByUserId;
    grn(): string;
}
