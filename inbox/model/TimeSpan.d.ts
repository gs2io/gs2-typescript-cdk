export interface TimeSpanOptions {
}
export default class TimeSpan {
    private readonly days;
    private readonly hours;
    private readonly minutes;
    constructor(days: number, hours: number, minutes: number, options?: TimeSpanOptions);
    properties(): {
        [name: string]: any;
    };
}
