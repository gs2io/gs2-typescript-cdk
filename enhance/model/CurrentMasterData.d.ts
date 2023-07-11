import { CdkResource, Stack } from "../../core/model";
import RateModel from "./RateModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly rateModels;
    constructor(stack: Stack, namespaceName: string, rateModels: RateModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
