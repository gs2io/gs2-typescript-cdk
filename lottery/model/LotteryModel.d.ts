export declare const LotteryModelMode: {
    readonly NORMAL: "normal";
    readonly BOX: "box";
};
export declare type LotteryModelMode = typeof LotteryModelMode[keyof typeof LotteryModelMode];
export declare const LotteryModelMethod: {
    readonly PRIZE_TABLE: "prize_table";
    readonly SCRIPT: "script";
};
export declare type LotteryModelMethod = typeof LotteryModelMethod[keyof typeof LotteryModelMethod];
import LotteryModelRef from "../ref/LotteryModelRef";
export interface LotteryModelOptions {
    metadata?: string | null | undefined;
    prizeTableName?: string | null | undefined;
    choicePrizeTableScriptId?: string | null | undefined;
}
export interface LotteryModelPrizeTableOptions {
    metadata?: string | null | undefined;
    prizeTableName?: string | null | undefined;
}
export interface LotteryModelScriptOptions {
    metadata?: string | null | undefined;
    choicePrizeTableScriptId?: string | null | undefined;
}
export default class LotteryModel {
    private readonly name;
    private readonly metadata;
    private readonly mode;
    private readonly method;
    private readonly prizeTableName;
    private readonly choicePrizeTableScriptId;
    constructor(name: string, mode: LotteryModelMode, method: LotteryModelMethod, options?: LotteryModelOptions);
    static prizeTable(name: string, mode: LotteryModelMode, prizeTableName: string, options?: LotteryModelPrizeTableOptions): LotteryModel;
    static script(name: string, mode: LotteryModelMode, choicePrizeTableScriptId: string, options?: LotteryModelScriptOptions): LotteryModel;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): LotteryModelRef;
}
