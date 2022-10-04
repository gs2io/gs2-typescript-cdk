import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import ConsumeAction from "../../core/model/ConsumeAction";
import AcquireAction from "../../core/model/AcquireAction";
import SalesItemMasterRef from "../ref/SalesItemMasterRef";
export interface SalesItemMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
}
export default class SalesItemMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly consumeActions;
    private readonly acquireActions;
    constructor(stack: Stack, namespaceName: string, name: string, consumeActions: ConsumeAction[], acquireActions: AcquireAction[], options?: SalesItemMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): SalesItemMasterRef;
    getAttrSalesItemId(): GetAttr;
}
