import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import TransactionSetting from "../../core/model/TransactionSetting";
import LogSetting from "../../core/model/LogSetting";
import LotteryModel from "./LotteryModel";
import PrizeTable from "./PrizeTable";
import NamespaceRef from "../ref/NamespaceRef";
export interface NamespaceOptions {
    description?: string | null | undefined;
    lotteryTriggerScriptId?: string | null | undefined;
    choicePrizeTableScriptId?: string | null | undefined;
    logSetting?: LogSetting | null | undefined;
}
export default class Namespace extends core.CdkResource {
    private stack;
    private readonly name;
    private readonly description;
    private readonly transactionSetting;
    private readonly lotteryTriggerScriptId;
    private readonly choicePrizeTableScriptId;
    private readonly logSetting;
    constructor(stack: Stack, name: string, transactionSetting: TransactionSetting, options?: NamespaceOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(lotteryModels: LotteryModel[], prizeTables: PrizeTable[]): Namespace;
}
