import ItemModelMasterRef from "./ItemModelMasterRef";
export default class InventoryModelMasterRef {
    private namespaceName;
    private inventoryName;
    constructor(namespaceName: string, inventoryName: string);
    itemModelMaster(itemName: string): ItemModelMasterRef;
    grn(): string;
}
