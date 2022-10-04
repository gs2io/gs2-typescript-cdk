import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import ItemModelMasterRef from "../ref/ItemModelMasterRef";
export interface ItemModelMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
}
export default class ItemModelMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly stackingLimit;
    private readonly allowMultipleStacks;
    private readonly sortValue;
    constructor(stack: Stack, namespaceName: string, inventoryName: string, name: string, stackingLimit: number, allowMultipleStacks: boolean, sortValue: number, options?: ItemModelMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string, inventoryName: string): ItemModelMasterRef;
    getAttrItemModelId(): GetAttr;
}
