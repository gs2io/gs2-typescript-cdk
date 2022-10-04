import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import DistributorModelMasterRef from "../ref/DistributorModelMasterRef";
export interface DistributorModelMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
    inboxNamespaceId?: string | null | undefined;
    whiteListTargetIds?: string[] | null | undefined;
}
export default class DistributorModelMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly inboxNamespaceId;
    private readonly whiteListTargetIds;
    constructor(stack: Stack, namespaceName: string, name: string, options?: DistributorModelMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): DistributorModelMasterRef;
    getAttrDistributorModelId(): GetAttr;
}
