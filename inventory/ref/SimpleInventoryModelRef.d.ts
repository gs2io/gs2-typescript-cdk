import SimpleItemModelRef from "./SimpleItemModelRef";
import AcquireSimpleItemsByUserId from "../stampSheet/AcquireSimpleItemsByUserId";
import AcquireCount from "../model/AcquireCount";
import SetSimpleItemsByUserId from "../stampSheet/SetSimpleItemsByUserId";
import HeldCount from "../model/HeldCount";
import ConsumeSimpleItemsByUserId from "../stampSheet/ConsumeSimpleItemsByUserId";
import ConsumeCount from "../model/ConsumeCount";
import VerifySimpleItemByUserId from "../stampSheet/VerifySimpleItemByUserId";
import { SimpleItemVerifyType } from "../stampSheet/enum/SimpleItemVerifyType";
export default class SimpleInventoryModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    constructor(namespaceName: string, inventoryName: string);
    simpleItemModel(itemName: string): SimpleItemModelRef;
    acquireSimpleItems(acquireCounts: AcquireCount[], userId?: string): AcquireSimpleItemsByUserId;
    setSimpleItems(counts: HeldCount[], userId?: string): SetSimpleItemsByUserId;
    consumeSimpleItems(consumeCounts: ConsumeCount[], userId?: string): ConsumeSimpleItemsByUserId;
    verifySimpleItem(itemName: string, verifyType: SimpleItemVerifyType, count: number, userId?: string): VerifySimpleItemByUserId;
    grn(): string;
}
