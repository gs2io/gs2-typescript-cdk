import { MetricModelOptions } from "./options/MetricModelOptions";
import { MetricModelType } from "./enums/MetricModelType";
export default class MetricModel {
    private readonly name;
    private readonly type;
    private readonly labels;
    constructor(name: string, type: MetricModelType, options?: MetricModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
