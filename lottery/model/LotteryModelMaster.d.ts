import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
export declare const LotteryModelMasterMode: {
    readonly NORMAL: "normal";
    readonly BOX: "box";
};
export declare type LotteryModelMasterMode = typeof LotteryModelMasterMode[keyof typeof LotteryModelMasterMode];
export declare const LotteryModelMasterMethod: {
    readonly PRIZE_TABLE: "prize_table";
    readonly SCRIPT: "script";
};
export declare type LotteryModelMasterMethod = typeof LotteryModelMasterMethod[keyof typeof LotteryModelMasterMethod];
import LotteryModelMasterRef from "../ref/LotteryModelMasterRef";
export interface LotteryModelMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
    prizeTableName?: string | null | undefined;
    choicePrizeTableScriptId?: string | null | undefined;
}
export interface LotteryModelMasterPrizeTableOptions {
}
export interface LotteryModelMasterScriptOptions {
}
export default class LotteryModelMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly mode;
    private readonly method;
    private readonly prizeTableName;
    private readonly choicePrizeTableScriptId;
    constructor(stack: Stack, namespaceName: string, name: string, mode: LotteryModelMasterMode, method: LotteryModelMasterMethod, options?: LotteryModelMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): LotteryModelMasterRef;
    getAttrLotteryModelId(): GetAttr;
}
