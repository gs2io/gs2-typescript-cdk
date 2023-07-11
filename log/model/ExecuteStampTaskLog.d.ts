import { ExecuteStampTaskLogOptions } from "./options/ExecuteStampTaskLogOptions";
export default class ExecuteStampTaskLog {
    private readonly timestamp;
    private readonly taskId;
    private readonly service;
    private readonly method;
    private readonly userId;
    private readonly action;
    private readonly args;
    constructor(timestamp: number, taskId: string, service: string, method: string, userId: string, action: string, args: string, options?: ExecuteStampTaskLogOptions | null);
    properties(): {
        [name: string]: any;
    };
}
