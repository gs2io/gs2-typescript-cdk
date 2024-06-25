import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import PlatformSetting from "./PlatformSetting";
import NamespaceRef from "../ref/NamespaceRef";
import StoreContentModel from "./StoreContentModel";
import { NamespaceCurrencyUsagePriority } from "./enum/NamespaceCurrencyUsagePriority";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly currencyUsagePriority;
    private readonly sharedFreeCurrency;
    private readonly platformSetting;
    private readonly description;
    private readonly changeBalanceScript;
    private readonly logSetting;
    constructor(stack: Stack, name: string, currencyUsagePriority: NamespaceCurrencyUsagePriority, sharedFreeCurrency: boolean, platformSetting: PlatformSetting, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(storeContentModels: StoreContentModel[]): Namespace;
}
