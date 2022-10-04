import CurrentItemModelMasterRef from "./CurrentItemModelMasterRef";
import InventoryModelRef from "./InventoryModelRef";
import InventoryModelMasterRef from "./InventoryModelMasterRef";
export default class NamespaceRef {
    private namespaceName;
    constructor(namespaceName: string);
    currentItemModelMaster(): CurrentItemModelMasterRef;
    inventoryModel(inventoryName: string): InventoryModelRef;
    inventoryModelMaster(inventoryName: string): InventoryModelMasterRef;
    grn(): string;
}
