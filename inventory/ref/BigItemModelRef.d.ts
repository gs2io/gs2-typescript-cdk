import AcquireBigItemByUserId from "../stampSheet/AcquireBigItemByUserId";
import SetBigItemByUserId from "../stampSheet/SetBigItemByUserId";
import ConsumeBigItemByUserId from "../stampSheet/ConsumeBigItemByUserId";
import VerifyBigItemByUserId from "../stampSheet/VerifyBigItemByUserId";
import { BigItemVerifyType } from "../stampSheet/enums/BigItemVerifyType";
export default class BigItemModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly itemName;
    constructor(namespaceName: string, inventoryName: string, itemName: string);
    acquireBigItem(acquireCount: string, userId?: string): AcquireBigItemByUserId;
    setBigItem(count: string, userId?: string): SetBigItemByUserId;
    consumeBigItem(consumeCount: string, userId?: string): ConsumeBigItemByUserId;
    verifyBigItem(verifyType: BigItemVerifyType, count: string, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyBigItemByUserId;
    grn(): string;
}
