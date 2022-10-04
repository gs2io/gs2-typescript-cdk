import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import InventoryModelMasterRef from "../ref/InventoryModelMasterRef";
export interface InventoryModelMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
}
export default class InventoryModelMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly initialCapacity;
    private readonly maxCapacity;
    private readonly protectReferencedItem;
    constructor(stack: Stack, namespaceName: string, name: string, initialCapacity: number, maxCapacity: number, protectReferencedItem: boolean, options?: InventoryModelMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): InventoryModelMasterRef;
    getAttrInventoryModelId(): GetAttr;
}
