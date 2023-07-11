import { AcquireAction } from "../../core/model";
export default class AcquireItemSetByUserId extends AcquireAction {
    constructor(namespaceName: string, inventoryName: string, itemName: string, acquireCount: number, expiresAt?: number | null, createNewItemSet?: boolean | null, itemSetName?: string | null, userId?: string | null);
}
