import { ExecuteStampSheetLogCountOptions } from "./options/ExecuteStampSheetLogCountOptions";
export default class ExecuteStampSheetLogCount {
    private readonly count;
    private readonly service;
    private readonly method;
    private readonly userId;
    private readonly action;
    constructor(count: number, options?: ExecuteStampSheetLogCountOptions | null);
    properties(): {
        [name: string]: any;
    };
}
