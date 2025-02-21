import { LotteryModelOptions } from "./options/LotteryModelOptions";
import { LotteryModelMethodIsPrizeTableOptions } from "./options/LotteryModelMethodIsPrizeTableOptions";
import { LotteryModelMethodIsScriptOptions } from "./options/LotteryModelMethodIsScriptOptions";
import { LotteryModelMode } from "./enums/LotteryModelMode";
import { LotteryModelMethod } from "./enums/LotteryModelMethod";
export default class LotteryModel {
    private readonly name;
    private readonly mode;
    private readonly method;
    private readonly metadata;
    private readonly prizeTableName;
    private readonly choicePrizeTableScriptId;
    constructor(name: string, mode: LotteryModelMode, method: LotteryModelMethod, options?: LotteryModelOptions | null);
    static methodIsPrizeTable(name: string, mode: LotteryModelMode, prizeTableName: string, options?: LotteryModelMethodIsPrizeTableOptions | null): LotteryModel;
    static methodIsScript(name: string, mode: LotteryModelMode, choicePrizeTableScriptId: string, options?: LotteryModelMethodIsScriptOptions | null): LotteryModel;
    properties(): {
        [name: string]: any;
    };
}
