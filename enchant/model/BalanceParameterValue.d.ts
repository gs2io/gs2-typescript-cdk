import { BalanceParameterValueOptions } from "./options/BalanceParameterValueOptions";
export default class BalanceParameterValue {
    private readonly name;
    private readonly value;
    constructor(name: string, value: number, options?: BalanceParameterValueOptions | null);
    properties(): {
        [name: string]: any;
    };
}
