import ItemModelRef from "../ref/ItemModelRef";
export interface ItemModelOptions {
    metadata?: string | null | undefined;
}
export default class ItemModel {
    private readonly name;
    private readonly metadata;
    private readonly stackingLimit;
    private readonly allowMultipleStacks;
    private readonly sortValue;
    constructor(name: string, stackingLimit: number, allowMultipleStacks: boolean, sortValue: number, options?: ItemModelOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string, inventoryName: string): ItemModelRef;
}
