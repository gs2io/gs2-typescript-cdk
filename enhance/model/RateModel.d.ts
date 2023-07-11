import { RateModelOptions } from "./options/RateModelOptions";
export default class RateModel {
    private readonly name;
    private readonly targetInventoryModelId;
    private readonly acquireExperienceSuffix;
    private readonly materialInventoryModelId;
    private readonly experienceModelId;
    private readonly description;
    private readonly metadata;
    private readonly acquireExperienceHierarchy;
    private readonly bonusRates;
    constructor(name: string, targetInventoryModelId: string, acquireExperienceSuffix: string, materialInventoryModelId: string, experienceModelId: string, options?: RateModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
