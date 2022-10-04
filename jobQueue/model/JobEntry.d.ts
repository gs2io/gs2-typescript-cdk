export interface JobEntryOptions {
}
export default class JobEntry {
    private readonly scriptId;
    private readonly args;
    private readonly maxTryCount;
    constructor(scriptId: string, args: string, maxTryCount: number, options?: JobEntryOptions);
    properties(): {
        [name: string]: any;
    };
}
