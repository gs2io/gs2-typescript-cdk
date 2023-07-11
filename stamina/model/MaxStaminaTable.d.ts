import { MaxStaminaTableOptions } from "./options/MaxStaminaTableOptions";
export default class MaxStaminaTable {
    private readonly name;
    private readonly experienceModelId;
    private readonly values;
    private readonly metadata;
    constructor(name: string, experienceModelId: string, values: number[], options?: MaxStaminaTableOptions | null);
    properties(): {
        [name: string]: any;
    };
}
