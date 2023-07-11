import PrizeTableRef from "./PrizeTableRef";
import LotteryModelRef from "./LotteryModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    prizeTable(prizeTableName: string): PrizeTableRef;
    lotteryModel(lotteryName: string): LotteryModelRef;
    grn(): string;
}
