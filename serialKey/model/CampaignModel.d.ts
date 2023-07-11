import { CampaignModelOptions } from "./options/CampaignModelOptions";
export default class CampaignModel {
    private readonly name;
    private readonly enableCampaignCode;
    private readonly metadata;
    constructor(name: string, enableCampaignCode: boolean, options?: CampaignModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
