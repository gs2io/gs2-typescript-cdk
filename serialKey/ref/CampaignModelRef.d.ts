export default class CampaignModelRef {
    private readonly namespaceName;
    private readonly campaignModelName;
    constructor(namespaceName: string, campaignModelName: string);
    grn(): string;
}
