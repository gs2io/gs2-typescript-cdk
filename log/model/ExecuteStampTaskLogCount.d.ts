import { ExecuteStampTaskLogCountOptions } from "./options/ExecuteStampTaskLogCountOptions";
export default class ExecuteStampTaskLogCount {
    private readonly count;
    private readonly service;
    private readonly method;
    private readonly userId;
    private readonly action;
    constructor(count: number, options?: ExecuteStampTaskLogCountOptions | null);
    properties(): {
        [name: string]: any;
    };
}
