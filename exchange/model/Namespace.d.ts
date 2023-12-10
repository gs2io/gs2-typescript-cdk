import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import RateModel from "./RateModel";
import IncrementalRateModel from "./IncrementalRateModel";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly description;
    private readonly enableAwaitExchange;
    private readonly enableDirectExchange;
    private readonly transactionSetting;
    private readonly exchangeScript;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(rateModels: RateModel[], incrementalRateModels: IncrementalRateModel[]): Namespace;
}
