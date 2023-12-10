import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import LotteryModel from "./LotteryModel";
import PrizeTable from "./PrizeTable";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly description;
    private readonly transactionSetting;
    private readonly lotteryTriggerScriptId;
    private readonly choicePrizeTableScriptId;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(lotteryModels: LotteryModel[], prizeTables: PrizeTable[]): Namespace;
}
