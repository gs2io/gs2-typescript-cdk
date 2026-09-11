import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import RateModel from "./RateModel";
import UnleashRateModel from "./UnleashRateModel";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly description;
    /** @deprecated */
    private readonly transactionSetting;
    private readonly transactionSettingV2;
    private readonly enhanceScript;
    private readonly logSetting;
    /** @deprecated */
    private readonly enableDirectEnhance;
    constructor(stack: Stack, name: string, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(rateModels: RateModel[], unleashRateModels: UnleashRateModel[]): Namespace;
}
