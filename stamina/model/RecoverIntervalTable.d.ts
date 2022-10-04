import RecoverIntervalTableRef from "../ref/RecoverIntervalTableRef";
export interface RecoverIntervalTableOptions {
    metadata?: string | null | undefined;
}
export default class RecoverIntervalTable {
    private readonly name;
    private readonly metadata;
    private readonly experienceModelId;
    private readonly values;
    constructor(name: string, experienceModelId: string, values: number[], options?: RecoverIntervalTableOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): RecoverIntervalTableRef;
}
