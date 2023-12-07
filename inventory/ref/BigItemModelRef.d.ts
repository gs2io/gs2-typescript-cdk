import AcquireBigItemByUserId from "../stampSheet/AcquireBigItemByUserId";
import SetBigItemByUserId from "../stampSheet/SetBigItemByUserId";
import ConsumeBigItemByUserId from "../stampSheet/ConsumeBigItemByUserId";
import VerifyBigItemByUserId from "../stampSheet/VerifyBigItemByUserId";
export default class BigItemModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly itemName;
    constructor(namespaceName: string, inventoryName: string, itemName: string);
    acquireBigItem(acquireCount: string, userId?: string | null): AcquireBigItemByUserId;
    setBigItem(count: string, userId?: string | null): SetBigItemByUserId;
    consumeBigItem(consumeCount: string, userId?: string | null): ConsumeBigItemByUserId;
    verifyBigItem(verifyType: string, count: string, userId?: string | null): VerifyBigItemByUserId;
    grn(): string;
}
