import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import TransactionSetting from "../../core/model/TransactionSetting";
import NamespaceRef from "../ref/NamespaceRef";
import RateModel from "./RateModel";
import IncrementalRateModel from "./IncrementalRateModel";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly transactionSetting;
    private readonly description;
    private readonly enableAwaitExchange;
    private readonly enableDirectExchange;
    private readonly exchangeScript;
    private readonly logSetting;
    constructor(stack: Stack, name: string, transactionSetting: TransactionSetting, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(rateModels: RateModel[], incrementalRateModels: IncrementalRateModel[]): Namespace;
}
