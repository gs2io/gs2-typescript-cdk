import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import PlatformSetting from "./PlatformSetting";
import NamespaceRef from "../ref/NamespaceRef";
import StoreContentModel from "./StoreContentModel";
import StoreSubscriptionContentModel from "./StoreSubscriptionContentModel";
import { NamespaceCurrencyUsagePriority } from "./enums/NamespaceCurrencyUsagePriority";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly currencyUsagePriority;
    private readonly sharedFreeCurrency;
    private readonly platformSetting;
    private readonly description;
    private readonly depositBalanceScript;
    private readonly withdrawBalanceScript;
    private readonly subscribeScript;
    private readonly renewScript;
    private readonly unsubscribeScript;
    private readonly takeOverScript;
    private readonly changeSubscriptionStatusNotification;
    private readonly logSetting;
    constructor(stack: Stack, name: string, currencyUsagePriority: NamespaceCurrencyUsagePriority, sharedFreeCurrency: boolean, platformSetting: PlatformSetting, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(storeContentModels: StoreContentModel[], storeSubscriptionContentModels: StoreSubscriptionContentModel[]): Namespace;
}
