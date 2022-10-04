export interface ExecuteStampTaskLogCountOptions {
    service?: string | null | undefined;
    method?: string | null | undefined;
    userId?: string | null | undefined;
    action?: string | null | undefined;
}
export default class ExecuteStampTaskLogCount {
    private readonly service;
    private readonly method;
    private readonly userId;
    private readonly action;
    private readonly count;
    constructor(count: number, options?: ExecuteStampTaskLogCountOptions);
    properties(): {
        [name: string]: any;
    };
}
