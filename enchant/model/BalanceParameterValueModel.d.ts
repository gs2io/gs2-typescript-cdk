import { BalanceParameterValueModelOptions } from "./options/BalanceParameterValueModelOptions";
export default class BalanceParameterValueModel {
    private readonly name;
    private readonly metadata;
    constructor(name: string, options?: BalanceParameterValueModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
