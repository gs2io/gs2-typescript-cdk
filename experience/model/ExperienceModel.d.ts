import Threshold from "./Threshold";
import { ExperienceModelOptions } from "./options/ExperienceModelOptions";
export default class ExperienceModel {
    private readonly name;
    private readonly defaultExperience;
    private readonly defaultRankCap;
    private readonly maxRankCap;
    private readonly rankThreshold;
    private readonly metadata;
    private readonly acquireActionRates;
    constructor(name: string, defaultExperience: number, defaultRankCap: number, maxRankCap: number, rankThreshold: Threshold, options?: ExperienceModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
