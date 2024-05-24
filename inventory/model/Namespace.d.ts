import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import InventoryModel from "./InventoryModel";
import SimpleInventoryModel from "./SimpleInventoryModel";
import BigInventoryModel from "./BigInventoryModel";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly description;
    private readonly acquireScript;
    private readonly overflowScript;
    private readonly consumeScript;
    private readonly simpleItemAcquireScript;
    private readonly simpleItemConsumeScript;
    private readonly bigItemAcquireScript;
    private readonly bigItemConsumeScript;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(inventoryModels: InventoryModel[], simpleInventoryModels: SimpleInventoryModel[], bigInventoryModels: BigInventoryModel[]): Namespace;
}
