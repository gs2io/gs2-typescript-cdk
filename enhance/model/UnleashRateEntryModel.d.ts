import { UnleashRateEntryModelOptions } from "./options/UnleashRateEntryModelOptions";
export default class UnleashRateEntryModel {
    private readonly gradeValue;
    private readonly needCount;
    constructor(gradeValue: number, needCount: number, options?: UnleashRateEntryModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
