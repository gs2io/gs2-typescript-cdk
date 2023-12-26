import GradeEntryModel from "./GradeEntryModel";
import { GradeModelOptions } from "./options/GradeModelOptions";
export default class GradeModel {
    private readonly name;
    private readonly experienceModelId;
    private readonly gradeEntries;
    private readonly metadata;
    private readonly defaultGrades;
    private readonly acquireActionRates;
    constructor(name: string, experienceModelId: string, gradeEntries: GradeEntryModel[], options?: GradeModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
