import AcquireBigItemByUserId from "../stampSheet/AcquireBigItemByUserId";
import ConsumeBigItemByUserId from "../stampSheet/ConsumeBigItemByUserId";
export default class BigItemModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly itemName;
    constructor(namespaceName: string, inventoryName: string, itemName: string);
    acquireBigItem(acquireCount: string, userId?: string | null): AcquireBigItemByUserId;
    consumeBigItem(consumeCount: string, userId?: string | null): ConsumeBigItemByUserId;
    grn(): string;
}
