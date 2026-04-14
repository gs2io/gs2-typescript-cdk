import { TimeseriesPointOptions } from "./options/TimeseriesPointOptions";
export default class TimeseriesPoint {
    private readonly timestamp;
    private readonly values;
    constructor(timestamp: number, options?: TimeseriesPointOptions | null);
    properties(): {
        [name: string]: any;
    };
}
