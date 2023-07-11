import { CdkResource, Stack } from "../../core/model";
import LotteryModel from "./LotteryModel";
import PrizeTable from "./PrizeTable";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly lotteryModels;
    private readonly prizeTables;
    constructor(stack: Stack, namespaceName: string, lotteryModels: LotteryModel[], prizeTables: PrizeTable[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
