import ItemModelRef from "./ItemModelRef";
import AddCapacityByUserId from "../stampSheet/AddCapacityByUserId";
import SetCapacityByUserId from "../stampSheet/SetCapacityByUserId";
export default class InventoryModelRef {
    private namespaceName;
    private inventoryName;
    constructor(namespaceName: string, inventoryName: string);
    itemModel(itemName: string): ItemModelRef;
    addCapacity(addCapacityValue: number, userId?: string): AddCapacityByUserId;
    setCapacity(newCapacityValue: number, userId?: string): SetCapacityByUserId;
    grn(): string;
}
