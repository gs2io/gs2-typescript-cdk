import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import SalesItemGroupMasterRef from "../ref/SalesItemGroupMasterRef";
export interface SalesItemGroupMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
}
export default class SalesItemGroupMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly salesItemNames;
    constructor(stack: Stack, namespaceName: string, name: string, salesItemNames: string[], options?: SalesItemGroupMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): SalesItemGroupMasterRef;
    getAttrSalesItemGroupId(): GetAttr;
}
