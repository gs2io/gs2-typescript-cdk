import { AcquireAction } from "../../core/model";
export default class AcquireItemSetByUserId extends AcquireAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, acquireCount: number, expiresAt: number, createNewItemSet: boolean, itemSetName?: string | null, userId?: string);
}
