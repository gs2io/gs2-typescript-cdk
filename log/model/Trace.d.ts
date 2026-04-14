import { TraceOptions } from "./options/TraceOptions";
export default class Trace {
    private readonly truncated;
    private readonly spans;
    constructor(truncated: boolean, options?: TraceOptions | null);
    properties(): {
        [name: string]: any;
    };
}
