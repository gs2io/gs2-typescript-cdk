import { CdkResource, Stack } from "../../core/model";
import RateModel from "./RateModel";
import UnleashRateModel from "./UnleashRateModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly rateModels;
    private readonly unleashRateModels;
    constructor(stack: Stack, namespaceName: string, rateModels: RateModel[], unleashRateModels: UnleashRateModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
