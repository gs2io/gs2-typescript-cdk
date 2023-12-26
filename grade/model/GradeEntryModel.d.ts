import { GradeEntryModelOptions } from "./options/GradeEntryModelOptions";
export default class GradeEntryModel {
    private readonly rankCapValue;
    private readonly gradeUpPropertyIdRegex;
    private readonly metadata;
    private readonly propertyIdRegex;
    constructor(rankCapValue: number, gradeUpPropertyIdRegex: string, options?: GradeEntryModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
