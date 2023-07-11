import { ItemModelOptions } from "./options/ItemModelOptions";
export default class ItemModel {
    private readonly name;
    private readonly stackingLimit;
    private readonly allowMultipleStacks;
    private readonly sortValue;
    private readonly metadata;
    constructor(name: string, stackingLimit: number, allowMultipleStacks: boolean, sortValue: number, options?: ItemModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
