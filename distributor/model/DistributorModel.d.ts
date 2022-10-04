import DistributorModelRef from "../ref/DistributorModelRef";
export interface DistributorModelOptions {
    metadata?: string | null | undefined;
    inboxNamespaceId?: string | null | undefined;
    whiteListTargetIds?: string[] | null | undefined;
}
export default class DistributorModel {
    private readonly name;
    private readonly metadata;
    private readonly inboxNamespaceId;
    private readonly whiteListTargetIds;
    constructor(name: string, options?: DistributorModelOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): DistributorModelRef;
}
