import CounterScopeModel from "./CounterScopeModel";
import { CounterModelOptions } from "./options/CounterModelOptions";
export default class CounterModel {
    private readonly name;
    private readonly scopes;
    private readonly metadata;
    private readonly challengePeriodEventId;
    constructor(name: string, scopes: CounterScopeModel[], options?: CounterModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
