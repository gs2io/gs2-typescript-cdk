import { ConsumeAction } from "../../core/model";
import { InventoryVerifyType } from "./enum/InventoryVerifyType";
export default class VerifyInventoryCurrentMaxCapacityByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly inventoryName;
    private readonly verifyType;
    private readonly currentInventoryMaxCapacity;
    constructor(namespaceName: string, inventoryName: string, verifyType: InventoryVerifyType, currentInventoryMaxCapacity: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
