import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import CampaignModelMasterRef from "../ref/CampaignModelMasterRef";
export interface CampaignModelMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
}
export default class CampaignModelMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly enableCampaignCode;
    constructor(stack: Stack, namespaceName: string, name: string, enableCampaignCode: boolean, options?: CampaignModelMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): CampaignModelMasterRef;
    getAttrCampaignId(): GetAttr;
}
