import CurrentLotteryMasterRef from "./CurrentLotteryMasterRef";
import PrizeTableRef from "./PrizeTableRef";
import LotteryModelRef from "./LotteryModelRef";
import PrizeTableMasterRef from "./PrizeTableMasterRef";
import LotteryModelMasterRef from "./LotteryModelMasterRef";
export default class NamespaceRef {
    private namespaceName;
    constructor(namespaceName: string);
    currentLotteryMaster(): CurrentLotteryMasterRef;
    prizeTable(prizeTableName: string): PrizeTableRef;
    lotteryModel(lotteryName: string): LotteryModelRef;
    prizeTableMaster(prizeTableName: string): PrizeTableMasterRef;
    lotteryModelMaster(lotteryName: string): LotteryModelMasterRef;
    grn(): string;
}
