import { ConsumeAction } from "../../core/model";
import { InventoryVerifyType } from "./enum/InventoryVerifyType";
export default class VerifyInventoryCurrentMaxCapacityByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly inventoryName;
    private readonly verifyType;
    private readonly currentInventoryMaxCapacity;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, verifyType: InventoryVerifyType, currentInventoryMaxCapacity: number, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
