import SalesItemRef from "./SalesItemRef";
import SalesItemGroupRef from "./SalesItemGroupRef";
export default class DisplayItemRef {
    private readonly namespaceName;
    private readonly displayItemId;
    constructor(namespaceName: string, displayItemId: string);
    salesItem(): SalesItemRef;
    salesItemGroup(): SalesItemGroupRef;
}
