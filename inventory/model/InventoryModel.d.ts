import ItemModel from "../model/ItemModel";
import InventoryModelRef from "../ref/InventoryModelRef";
export interface InventoryModelOptions {
    metadata?: string | null | undefined;
    protectReferencedItem?: boolean | null | undefined;
    itemModels?: ItemModel[] | null | undefined;
}
export default class InventoryModel {
    private readonly name;
    private readonly metadata;
    private readonly initialCapacity;
    private readonly maxCapacity;
    private readonly protectReferencedItem;
    private readonly itemModels;
    constructor(name: string, initialCapacity: number, maxCapacity: number, options?: InventoryModelOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): InventoryModelRef;
}
