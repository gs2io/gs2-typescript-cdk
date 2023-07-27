import { VariableOptions } from "./options/VariableOptions";
export default class Variable {
    private readonly stateMachineName;
    private readonly value;
    constructor(stateMachineName: string, value: string, options?: VariableOptions | null);
    properties(): {
        [name: string]: any;
    };
}
