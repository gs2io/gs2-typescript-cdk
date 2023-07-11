import { TimeSpanOptions } from "./options/TimeSpanOptions";
export default class TimeSpan {
    private readonly days;
    private readonly hours;
    private readonly minutes;
    constructor(days: number, hours: number, minutes: number, options?: TimeSpanOptions | null);
    properties(): {
        [name: string]: any;
    };
}
