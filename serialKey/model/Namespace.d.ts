import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import LogSetting from "../../core/model/LogSetting";
import CampaignModel from "./CampaignModel";
import NamespaceRef from "../ref/NamespaceRef";
export interface NamespaceOptions {
    description?: string | null | undefined;
    logSetting?: LogSetting | null | undefined;
}
export default class Namespace extends core.CdkResource {
    private stack;
    private readonly name;
    private readonly description;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(campaignModels: CampaignModel[]): Namespace;
}
