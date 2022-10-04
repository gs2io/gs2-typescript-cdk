export interface AccessLogCountOptions {
    service?: string | null | undefined;
    method?: string | null | undefined;
    userId?: string | null | undefined;
}
export default class AccessLogCount {
    private readonly service;
    private readonly method;
    private readonly userId;
    private readonly count;
    constructor(count: number, options?: AccessLogCountOptions);
    properties(): {
        [name: string]: any;
    };
}
