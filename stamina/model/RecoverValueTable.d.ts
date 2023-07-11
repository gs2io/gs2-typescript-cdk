import { RecoverValueTableOptions } from "./options/RecoverValueTableOptions";
export default class RecoverValueTable {
    private readonly name;
    private readonly experienceModelId;
    private readonly values;
    private readonly metadata;
    constructor(name: string, experienceModelId: string, values: number[], options?: RecoverValueTableOptions | null);
    properties(): {
        [name: string]: any;
    };
}
