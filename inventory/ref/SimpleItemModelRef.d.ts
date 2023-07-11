import AcquireSimpleItemsByUserId from "../stampSheet/AcquireSimpleItemsByUserId";
import AcquireCount from "../model/AcquireCount";
import ConsumeCount from "../model/ConsumeCount";
import ConsumeSimpleItemsByUserId from "../stampSheet/ConsumeSimpleItemsByUserId";
export default class SimpleItemModelRef {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly itemName;
    constructor(namespaceName: string, inventoryName: string, itemName: string);
    acquireSimpleItems(acquireCounts: AcquireCount[], userId?: string | null): AcquireSimpleItemsByUserId;
    consumeSimpleItems(consumeCounts: ConsumeCount[], userId?: string | null): ConsumeSimpleItemsByUserId;
    grn(): string;
}
