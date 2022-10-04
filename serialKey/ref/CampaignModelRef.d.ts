import IssueJobRef from "./IssueJobRef";
export default class CampaignModelRef {
    private namespaceName;
    private campaignModelName;
    constructor(namespaceName: string, campaignModelName: string);
    issueJob(issueJobName: string): IssueJobRef;
    grn(): string;
}
