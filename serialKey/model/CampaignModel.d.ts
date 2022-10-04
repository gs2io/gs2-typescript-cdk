import CampaignModelRef from "../ref/CampaignModelRef";
export interface CampaignModelOptions {
    metadata?: string | null | undefined;
}
export default class CampaignModel {
    private readonly name;
    private readonly metadata;
    private readonly enableCampaignCode;
    constructor(name: string, enableCampaignCode: boolean, options?: CampaignModelOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): CampaignModelRef;
}
