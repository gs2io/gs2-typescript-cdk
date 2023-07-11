import { CdkResource, Stack } from "../../core/model";
import CampaignModel from "./CampaignModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly campaignModels;
    constructor(stack: Stack, namespaceName: string, campaignModels: CampaignModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
