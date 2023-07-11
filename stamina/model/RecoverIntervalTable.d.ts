import { RecoverIntervalTableOptions } from "./options/RecoverIntervalTableOptions";
export default class RecoverIntervalTable {
    private readonly name;
    private readonly experienceModelId;
    private readonly values;
    private readonly metadata;
    constructor(name: string, experienceModelId: string, values: number[], options?: RecoverIntervalTableOptions | null);
    properties(): {
        [name: string]: any;
    };
}
