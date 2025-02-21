import BalanceParameterValueModel from "./BalanceParameterValueModel";
import { BalanceParameterModelOptions } from "./options/BalanceParameterModelOptions";
import { BalanceParameterModelInitialValueStrategy } from "./enums/BalanceParameterModelInitialValueStrategy";
export default class BalanceParameterModel {
    private readonly name;
    private readonly totalValue;
    private readonly initialValueStrategy;
    private readonly parameters;
    private readonly metadata;
    constructor(name: string, totalValue: number, initialValueStrategy: BalanceParameterModelInitialValueStrategy, parameters: BalanceParameterValueModel[], options?: BalanceParameterModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
