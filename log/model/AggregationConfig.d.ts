import { AggregationConfigOptions } from "./options/AggregationConfigOptions";
export default class AggregationConfig {
    private readonly type;
    private readonly field;
    constructor(options?: AggregationConfigOptions | null);
    properties(): {
        [name: string]: any;
    };
}
