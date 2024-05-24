import { TargetCounterModelOptions } from "./options/TargetCounterModelOptions";
export default class TargetCounterModel {
    private readonly counterName;
    private readonly value;
    private readonly resetType;
    constructor(counterName: string, value: number, options?: TargetCounterModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
