import { CdkResource, Stack } from "../../core/model";
import RateModel from "./RateModel";
import IncrementalRateModel from "./IncrementalRateModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly rateModels;
    private readonly incrementalRateModels;
    constructor(stack: Stack, namespaceName: string, rateModels: RateModel[], incrementalRateModels: IncrementalRateModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
