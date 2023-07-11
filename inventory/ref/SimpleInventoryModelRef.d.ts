import SimpleItemModelRef from "./SimpleItemModelRef";
import AcquireSimpleItemsByUserId from "../stampSheet/AcquireSimpleItemsByUserId";
import AcquireCount from "../model/AcquireCount";
import ConsumeCount from "../model/ConsumeCount";
import ConsumeSimpleItemsByUserId from "../stampSheet/ConsumeSimpleItemsByUserId";
export default class SimpleInventoryModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    constructor(namespaceName: string, inventoryName: string);
    simpleItemModel(itemName: string): SimpleItemModelRef;
    acquireSimpleItems(acquireCounts: AcquireCount[], userId?: string | null): AcquireSimpleItemsByUserId;
    consumeSimpleItems(consumeCounts: ConsumeCount[], userId?: string | null): ConsumeSimpleItemsByUserId;
    grn(): string;
}
