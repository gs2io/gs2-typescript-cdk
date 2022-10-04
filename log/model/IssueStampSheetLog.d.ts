export interface IssueStampSheetLogOptions {
    tasks?: string[] | null | undefined;
}
export default class IssueStampSheetLog {
    private readonly timestamp;
    private readonly transactionId;
    private readonly service;
    private readonly method;
    private readonly userId;
    private readonly action;
    private readonly args;
    private readonly tasks;
    constructor(timestamp: number, transactionId: string, service: string, method: string, userId: string, action: string, args: string, options?: IssueStampSheetLogOptions);
    properties(): {
        [name: string]: any;
    };
}
