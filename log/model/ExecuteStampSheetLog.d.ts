export interface ExecuteStampSheetLogOptions {
}
export default class ExecuteStampSheetLog {
    private readonly timestamp;
    private readonly transactionId;
    private readonly service;
    private readonly method;
    private readonly userId;
    private readonly action;
    private readonly args;
    constructor(timestamp: number, transactionId: string, service: string, method: string, userId: string, action: string, args: string, options?: ExecuteStampSheetLogOptions);
    properties(): {
        [name: string]: any;
    };
}
