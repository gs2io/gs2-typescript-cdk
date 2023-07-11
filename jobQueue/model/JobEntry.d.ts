import { JobEntryOptions } from "./options/JobEntryOptions";
export default class JobEntry {
    private readonly scriptId;
    private readonly args;
    private readonly maxTryCount;
    constructor(scriptId: string, args: string, maxTryCount: number, options?: JobEntryOptions | null);
    properties(): {
        [name: string]: any;
    };
}
