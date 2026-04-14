import { TimeseriesValueOptions } from "./options/TimeseriesValueOptions";
export default class TimeseriesValue {
    private readonly key;
    private readonly value;
    constructor(key: string, value: number, options?: TimeseriesValueOptions | null);
    properties(): {
        [name: string]: any;
    };
}
