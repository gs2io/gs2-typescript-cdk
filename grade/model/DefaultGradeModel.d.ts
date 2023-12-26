import { DefaultGradeModelOptions } from "./options/DefaultGradeModelOptions";
export default class DefaultGradeModel {
    private readonly propertyIdRegex;
    private readonly defaultGradeValue;
    constructor(propertyIdRegex: string, defaultGradeValue: number, options?: DefaultGradeModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
