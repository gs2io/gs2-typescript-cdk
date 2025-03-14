import ItemModelRef from "./ItemModelRef";
import AddCapacityByUserId from "../stampSheet/AddCapacityByUserId";
import SetCapacityByUserId from "../stampSheet/SetCapacityByUserId";
import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AcquireItemSetWithGradeByUserId from "../stampSheet/AcquireItemSetWithGradeByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyInventoryCurrentMaxCapacityByUserId from "../stampSheet/VerifyInventoryCurrentMaxCapacityByUserId";
import { InventoryVerifyType } from "../stampSheet/enums/InventoryVerifyType";
import VerifyItemSetByUserId from "../stampSheet/VerifyItemSetByUserId";
import { ItemSetVerifyType } from "../stampSheet/enums/ItemSetVerifyType";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
import { ReferenceOfVerifyType } from "../stampSheet/enums/ReferenceOfVerifyType";
export default class InventoryModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    constructor(namespaceName: string, inventoryName: string);
    itemModel(itemName: string): ItemModelRef;
    addCapacity(addCapacityValue: number, userId?: string): AddCapacityByUserId;
    setCapacity(newCapacityValue: number, userId?: string): SetCapacityByUserId;
    acquireItemSet(itemName: string, acquireCount: number, expiresAt?: number | null, createNewItemSet?: boolean | null, itemSetName?: string | null, userId?: string): AcquireItemSetByUserId;
    acquireItemSetWithGrade(itemName: string, gradeModelId: string, gradeValue: number, userId?: string): AcquireItemSetWithGradeByUserId;
    addReferenceOf(itemName: string, referenceOf: string, itemSetName?: string | null, userId?: string): AddReferenceOfByUserId;
    deleteReferenceOf(itemName: string, referenceOf: string, itemSetName?: string | null, userId?: string): DeleteReferenceOfByUserId;
    consumeItemSet(itemName: string, consumeCount: number, itemSetName?: string | null, userId?: string): ConsumeItemSetByUserId;
    verifyInventoryCurrentMaxCapacity(verifyType: InventoryVerifyType, currentInventoryMaxCapacity: number, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyInventoryCurrentMaxCapacityByUserId;
    verifyItemSet(itemName: string, verifyType: ItemSetVerifyType, count: number, itemSetName?: string | null, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyItemSetByUserId;
    verifyReferenceOf(itemName: string, referenceOf: string, verifyType: ReferenceOfVerifyType, itemSetName?: string | null, userId?: string): VerifyReferenceOfByUserId;
    grn(): string;
}
