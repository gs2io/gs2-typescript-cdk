export default class IssueJobRef {
    private readonly namespaceName;
    private readonly campaignModelName;
    private readonly issueJobName;
    constructor(namespaceName: string, campaignModelName: string, issueJobName: string);
    grn(): string;
}
