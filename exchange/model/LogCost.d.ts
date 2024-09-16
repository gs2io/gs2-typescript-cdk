import { LogCostOptions } from "./options/LogCostOptions";
export default class LogCost {
    private readonly base;
    private readonly adds;
    private readonly subs;
    constructor(base: number, adds: number[], options?: LogCostOptions | null);
    properties(): {
        [name: string]: any;
    };
}
