import { CdkResource, Stack } from "../../core/model";
import CampaignModel from "./CampaignModel";
export default class CurrentMasterData extends CdkResource {
    private version;
    private namespaceName;
    private readonly campaignModels;
    constructor(stack: Stack, namespaceName: string, campaignModels: CampaignModel[]);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
