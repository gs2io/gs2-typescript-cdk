import { IssueJobOptions } from "./options/IssueJobOptions";
import { IssueJobStatus } from "./enum/IssueJobStatus";
export default class IssueJob {
    private readonly name;
    private readonly issuedCount;
    private readonly issueRequestCount;
    private readonly status;
    private readonly metadata;
    constructor(name: string, issuedCount: number, issueRequestCount: number, status: IssueJobStatus, options?: IssueJobOptions | null);
    properties(): {
        [name: string]: any;
    };
}
