import { GradeEntryModelOptions } from "./options/GradeEntryModelOptions";
export default class GradeEntryModel {
    private readonly rankCapValue;
    private readonly propertyIdRegex;
    private readonly gradeUpPropertyIdRegex;
    private readonly metadata;
    constructor(rankCapValue: number, propertyIdRegex: string, gradeUpPropertyIdRegex: string, options?: GradeEntryModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
