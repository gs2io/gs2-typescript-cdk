import TierModel from "./TierModel";
import { SeasonModelOptions } from "./options/SeasonModelOptions";
export default class SeasonModel {
    private readonly name;
    private readonly tiers;
    private readonly experienceModelId;
    private readonly metadata;
    constructor(name: string, tiers: TierModel[], experienceModelId: string, options?: SeasonModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
