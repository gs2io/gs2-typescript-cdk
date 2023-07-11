import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import TransactionSetting from "../../core/model/TransactionSetting";
import NamespaceRef from "../ref/NamespaceRef";
import LotteryModel from "./LotteryModel";
import PrizeTable from "./PrizeTable";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly transactionSetting;
    private readonly description;
    private readonly lotteryTriggerScriptId;
    private readonly choicePrizeTableScriptId;
    private readonly logSetting;
    constructor(stack: Stack, name: string, transactionSetting: TransactionSetting, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(lotteryModels: LotteryModel[], prizeTables: PrizeTable[]): Namespace;
}
