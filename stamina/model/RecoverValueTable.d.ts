import RecoverValueTableRef from "../ref/RecoverValueTableRef";
export interface RecoverValueTableOptions {
    metadata?: string | null | undefined;
}
export default class RecoverValueTable {
    private readonly name;
    private readonly metadata;
    private readonly experienceModelId;
    private readonly values;
    constructor(name: string, experienceModelId: string, values: number[], options?: RecoverValueTableOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): RecoverValueTableRef;
}
