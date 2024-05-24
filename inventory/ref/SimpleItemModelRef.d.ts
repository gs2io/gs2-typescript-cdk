import AcquireSimpleItemsByUserId from "../stampSheet/AcquireSimpleItemsByUserId";
import AcquireCount from "../model/AcquireCount";
import SetSimpleItemsByUserId from "../stampSheet/SetSimpleItemsByUserId";
import HeldCount from "../model/HeldCount";
import ConsumeSimpleItemsByUserId from "../stampSheet/ConsumeSimpleItemsByUserId";
import ConsumeCount from "../model/ConsumeCount";
import VerifySimpleItemByUserId from "../stampSheet/VerifySimpleItemByUserId";
import { SimpleItemVerifyType } from "../stampSheet/enum/SimpleItemVerifyType";
export default class SimpleItemModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly itemName;
    constructor(namespaceName: string, inventoryName: string, itemName: string);
    acquireSimpleItems(acquireCounts: AcquireCount[], userId?: string): AcquireSimpleItemsByUserId;
    setSimpleItems(counts: HeldCount[], userId?: string): SetSimpleItemsByUserId;
    consumeSimpleItems(consumeCounts: ConsumeCount[], userId?: string): ConsumeSimpleItemsByUserId;
    verifySimpleItem(verifyType: SimpleItemVerifyType, count: number, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifySimpleItemByUserId;
    grn(): string;
}
