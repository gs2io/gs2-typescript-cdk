export default class IssueJobRef {
    private namespaceName;
    private campaignModelName;
    private issueJobName;
    constructor(namespaceName: string, campaignModelName: string, issueJobName: string);
    grn(): string;
}
