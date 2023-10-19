import { ConsumeAction } from "../../core/model";
export default class VerifyInventoryCurrentMaxCapacityByUserId extends ConsumeAction {
    constructor(namespaceName: string, inventoryName: string, verifyType: string, currentInventoryMaxCapacity: number, userId?: string | null);
}
