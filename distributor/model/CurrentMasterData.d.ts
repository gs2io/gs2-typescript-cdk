import { CdkResource, Stack } from "../../core/model";
import DistributorModel from "./DistributorModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly distributorModels;
    constructor(stack: Stack, namespaceName: string, distributorModels: DistributorModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
