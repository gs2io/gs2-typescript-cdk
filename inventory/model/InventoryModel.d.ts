import ItemModel from "./ItemModel";
import { InventoryModelOptions } from "./options/InventoryModelOptions";
export default class InventoryModel {
    private readonly name;
    private readonly initialCapacity;
    private readonly maxCapacity;
    private readonly itemModels;
    private readonly metadata;
    private readonly protectReferencedItem;
    constructor(name: string, initialCapacity: number, maxCapacity: number, itemModels: ItemModel[], options?: InventoryModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
