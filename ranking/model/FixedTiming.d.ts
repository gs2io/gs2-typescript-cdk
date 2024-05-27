import { FixedTimingOptions } from "./options/FixedTimingOptions";
export default class FixedTiming {
    private readonly hour;
    private readonly minute;
    constructor(options?: FixedTimingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
