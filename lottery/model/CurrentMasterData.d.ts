import { CdkResource, Stack } from "../../core/model";
import LotteryModel from "./LotteryModel";
import PrizeTable from "./PrizeTable";
export default class CurrentMasterData extends CdkResource {
    private version;
    private namespaceName;
    private readonly lotteryModels;
    private readonly prizeTables;
    constructor(stack: Stack, namespaceName: string, lotteryModels: LotteryModel[], prizeTables: PrizeTable[]);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
