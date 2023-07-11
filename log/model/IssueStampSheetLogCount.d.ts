import { IssueStampSheetLogCountOptions } from "./options/IssueStampSheetLogCountOptions";
export default class IssueStampSheetLogCount {
    private readonly count;
    private readonly service;
    private readonly method;
    private readonly userId;
    private readonly action;
    constructor(count: number, options?: IssueStampSheetLogCountOptions | null);
    properties(): {
        [name: string]: any;
    };
}
