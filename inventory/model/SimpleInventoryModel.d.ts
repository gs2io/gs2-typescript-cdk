import SimpleItemModel from "./SimpleItemModel";
import { SimpleInventoryModelOptions } from "./options/SimpleInventoryModelOptions";
export default class SimpleInventoryModel {
    private readonly name;
    private readonly simpleItemModels;
    private readonly metadata;
    constructor(name: string, simpleItemModels: SimpleItemModel[], options?: SimpleInventoryModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
