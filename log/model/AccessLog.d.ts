export interface AccessLogOptions {
    userId?: string | null | undefined;
}
export default class AccessLog {
    private readonly timestamp;
    private readonly requestId;
    private readonly service;
    private readonly method;
    private readonly userId;
    private readonly request;
    private readonly result;
    constructor(timestamp: number, requestId: string, service: string, method: string, request: string, result: string, options?: AccessLogOptions);
    properties(): {
        [name: string]: any;
    };
}
