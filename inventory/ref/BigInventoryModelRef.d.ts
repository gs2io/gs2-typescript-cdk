import BigItemModelRef from "./BigItemModelRef";
import AcquireBigItemByUserId from "../stampSheet/AcquireBigItemByUserId";
import SetBigItemByUserId from "../stampSheet/SetBigItemByUserId";
import ConsumeBigItemByUserId from "../stampSheet/ConsumeBigItemByUserId";
import VerifyBigItemByUserId from "../stampSheet/VerifyBigItemByUserId";
import { BigItemVerifyType } from "../stampSheet/enums/BigItemVerifyType";
export default class BigInventoryModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    constructor(namespaceName: string, inventoryName: string);
    bigItemModel(itemName: string): BigItemModelRef;
    acquireBigItem(itemName: string, acquireCount: string, userId?: string): AcquireBigItemByUserId;
    setBigItem(itemName: string, count: string, userId?: string): SetBigItemByUserId;
    consumeBigItem(itemName: string, consumeCount: string, userId?: string): ConsumeBigItemByUserId;
    verifyBigItem(itemName: string, verifyType: BigItemVerifyType, count: string, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyBigItemByUserId;
    grn(): string;
}
