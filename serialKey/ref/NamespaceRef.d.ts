import CurrentCampaignMasterRef from "./CurrentCampaignMasterRef";
import CampaignModelRef from "./CampaignModelRef";
import SerialKeyRef from "./SerialKeyRef";
import CampaignModelMasterRef from "./CampaignModelMasterRef";
export default class NamespaceRef {
    private namespaceName;
    constructor(namespaceName: string);
    currentCampaignMaster(): CurrentCampaignMasterRef;
    campaignModel(campaignModelName: string): CampaignModelRef;
    serialKey(serialKeyCode: string): SerialKeyRef;
    campaignModelMaster(campaignModelName: string): CampaignModelMasterRef;
    grn(): string;
}
