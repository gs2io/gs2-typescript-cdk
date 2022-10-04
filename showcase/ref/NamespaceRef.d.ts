import CurrentShowcaseMasterRef from "./CurrentShowcaseMasterRef";
import DisplayItemRef from "./DisplayItemRef";
import SalesItemMasterRef from "./SalesItemMasterRef";
import SalesItemGroupMasterRef from "./SalesItemGroupMasterRef";
import ShowcaseMasterRef from "./ShowcaseMasterRef";
export default class NamespaceRef {
    private namespaceName;
    constructor(namespaceName: string);
    currentShowcaseMaster(): CurrentShowcaseMasterRef;
    displayItem(): DisplayItemRef;
    salesItemMaster(salesItemName: string): SalesItemMasterRef;
    salesItemGroupMaster(salesItemGroupName: string): SalesItemGroupMasterRef;
    showcaseMaster(showcaseName: string): ShowcaseMasterRef;
    grn(): string;
}
