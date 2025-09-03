import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import { NamespacePriority } from "./enums/NamespacePriority";
import { NamespaceCurrency } from "./enums/NamespaceCurrency";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly priority;
    private readonly shareFree;
    private readonly currency;
    private readonly description;
    private readonly transactionSetting;
    private readonly appleKey;
    private readonly googleKey;
    private readonly enableFakeReceipt;
    private readonly createWalletScript;
    private readonly depositScript;
    private readonly withdrawScript;
    private readonly logSetting;
    constructor(stack: Stack, name: string, priority: NamespacePriority, shareFree: boolean, currency: NamespaceCurrency, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
}
