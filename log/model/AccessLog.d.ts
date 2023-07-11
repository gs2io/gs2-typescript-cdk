import { AccessLogOptions } from "./options/AccessLogOptions";
export default class AccessLog {
    private readonly timestamp;
    private readonly requestId;
    private readonly service;
    private readonly method;
    private readonly request;
    private readonly result;
    private readonly userId;
    constructor(timestamp: number, requestId: string, service: string, method: string, request: string, result: string, options?: AccessLogOptions | null);
    properties(): {
        [name: string]: any;
    };
}
