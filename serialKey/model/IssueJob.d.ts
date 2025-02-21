import { IssueJobOptions } from "./options/IssueJobOptions";
import { IssueJobStatus } from "./enums/IssueJobStatus";
export default class IssueJob {
    private readonly name;
    private readonly issuedCount;
    private readonly issueRequestCount;
    private readonly status;
    private readonly metadata;
    private readonly revision;
    constructor(name: string, issuedCount: number, issueRequestCount: number, status: IssueJobStatus, options?: IssueJobOptions | null);
    properties(): {
        [name: string]: any;
    };
}
