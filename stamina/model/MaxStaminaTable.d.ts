import MaxStaminaTableRef from "../ref/MaxStaminaTableRef";
export interface MaxStaminaTableOptions {
    metadata?: string | null | undefined;
}
export default class MaxStaminaTable {
    private readonly name;
    private readonly metadata;
    private readonly experienceModelId;
    private readonly values;
    constructor(name: string, experienceModelId: string, values: number[], options?: MaxStaminaTableOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): MaxStaminaTableRef;
}
