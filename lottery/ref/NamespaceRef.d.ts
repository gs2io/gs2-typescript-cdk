import PrizeTableRef from "./PrizeTableRef";
import LotteryModelRef from "./LotteryModelRef";
import ResetBoxByUserId from "../stampSheet/ResetBoxByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    prizeTable(prizeTableName: string): PrizeTableRef;
    lotteryModel(lotteryName: string): LotteryModelRef;
    resetBox(prizeTableName: string, userId?: string): ResetBoxByUserId;
    grn(): string;
}
