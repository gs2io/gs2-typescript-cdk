import { AccessLogCountOptions } from "./options/AccessLogCountOptions";
export default class AccessLogCount {
    private readonly count;
    private readonly service;
    private readonly method;
    private readonly userId;
    constructor(count: number, options?: AccessLogCountOptions | null);
    properties(): {
        [name: string]: any;
    };
}
