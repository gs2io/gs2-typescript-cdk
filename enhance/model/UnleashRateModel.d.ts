import UnleashRateEntryModel from "./UnleashRateEntryModel";
import { UnleashRateModelOptions } from "./options/UnleashRateModelOptions";
export default class UnleashRateModel {
    private readonly name;
    private readonly targetInventoryModelId;
    private readonly gradeModelId;
    private readonly gradeEntries;
    private readonly description;
    private readonly metadata;
    constructor(name: string, targetInventoryModelId: string, gradeModelId: string, gradeEntries: UnleashRateEntryModel[], options?: UnleashRateModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
