import { DistributorModelOptions } from "./options/DistributorModelOptions";
export default class DistributorModel {
    private readonly name;
    private readonly metadata;
    private readonly inboxNamespaceId;
    private readonly whiteListTargetIds;
    constructor(name: string, options?: DistributorModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
