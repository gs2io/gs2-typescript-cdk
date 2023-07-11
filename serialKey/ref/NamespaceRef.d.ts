import CampaignModelRef from "./CampaignModelRef";
import UseByUserId from "../stampSheet/UseByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    campaignModel(campaignModelName: string): CampaignModelRef;
    use(code: string, userId?: string | null): UseByUserId;
    grn(): string;
}
