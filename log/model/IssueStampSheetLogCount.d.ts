export interface IssueStampSheetLogCountOptions {
    service?: string | null | undefined;
    method?: string | null | undefined;
    userId?: string | null | undefined;
    action?: string | null | undefined;
}
export default class IssueStampSheetLogCount {
    private readonly service;
    private readonly method;
    private readonly userId;
    private readonly action;
    private readonly count;
    constructor(count: number, options?: IssueStampSheetLogCountOptions);
    properties(): {
        [name: string]: any;
    };
}
