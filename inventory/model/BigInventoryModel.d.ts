import BigItemModel from "./BigItemModel";
import { BigInventoryModelOptions } from "./options/BigInventoryModelOptions";
export default class BigInventoryModel {
    private readonly name;
    private readonly bigItemModels;
    private readonly metadata;
    constructor(name: string, bigItemModels: BigItemModel[], options?: BigInventoryModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
