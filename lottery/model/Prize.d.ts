import { AcquireAction } from "../../core/model";
import { PrizeOptions } from "./options/PrizeOptions";
import { PrizeTypeIsActionOptions } from "./options/PrizeTypeIsActionOptions";
import { PrizeTypeIsPrizeTableOptions } from "./options/PrizeTypeIsPrizeTableOptions";
import { PrizeType } from "./enums/PrizeType";
export default class Prize {
    private readonly prizeId;
    private readonly type;
    private readonly weight;
    private readonly acquireActions;
    private readonly drawnLimit;
    private readonly limitFailOverPrizeId;
    private readonly prizeTableName;
    constructor(prizeId: string, type: PrizeType, weight: number, options?: PrizeOptions | null);
    static typeIsAction(prizeId: string, weight: number, acquireActions: AcquireAction[], options?: PrizeTypeIsActionOptions | null): Prize;
    static typeIsPrizeTable(prizeId: string, weight: number, prizeTableName: string, options?: PrizeTypeIsPrizeTableOptions | null): Prize;
    properties(): {
        [name: string]: any;
    };
}
