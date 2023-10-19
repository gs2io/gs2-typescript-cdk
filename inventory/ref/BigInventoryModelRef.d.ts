import BigItemModelRef from "./BigItemModelRef";
import AcquireBigItemByUserId from "../stampSheet/AcquireBigItemByUserId";
import ConsumeBigItemByUserId from "../stampSheet/ConsumeBigItemByUserId";
import VerifyBigItemByUserId from "../stampSheet/VerifyBigItemByUserId";
export default class BigInventoryModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    constructor(namespaceName: string, inventoryName: string);
    bigItemModel(itemName: string): BigItemModelRef;
    acquireBigItem(itemName: string, acquireCount: string, userId?: string | null): AcquireBigItemByUserId;
    consumeBigItem(itemName: string, consumeCount: string, userId?: string | null): ConsumeBigItemByUserId;
    verifyBigItem(itemName: string, verifyType: string, count: string, userId?: string | null): VerifyBigItemByUserId;
    grn(): string;
}
