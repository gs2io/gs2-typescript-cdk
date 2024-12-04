import { LogRateOptions } from "./options/LogRateOptions";
export default class LogRate {
    private readonly base;
    private readonly logs;
    constructor(base: number, logs: number[], options?: LogRateOptions | null);
    properties(): {
        [name: string]: any;
    };
}
