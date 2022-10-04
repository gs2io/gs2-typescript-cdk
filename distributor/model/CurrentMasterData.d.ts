import { CdkResource, Stack } from "../../core/model";
import DistributorModel from "./DistributorModel";
export default class CurrentMasterData extends CdkResource {
    private version;
    private namespaceName;
    private readonly distributorModels;
    constructor(stack: Stack, namespaceName: string, distributorModels: DistributorModel[]);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
