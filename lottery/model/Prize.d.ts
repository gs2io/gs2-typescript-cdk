import { AcquireAction } from "../../core/model";
export declare const PrizeType: {
    readonly ACTION: "action";
    readonly PRIZE_TABLE: "prize_table";
};
export declare type PrizeType = typeof PrizeType[keyof typeof PrizeType];
export interface PrizeOptions {
    acquireActions?: AcquireAction[] | null | undefined;
    drawnLimit?: number | null | undefined;
    limitFailOverPrizeId?: string | null | undefined;
    prizeTableName?: string | null | undefined;
}
export default class Prize {
    private readonly prizeId;
    private readonly type;
    private readonly acquireActions;
    private readonly drawnLimit;
    private readonly limitFailOverPrizeId;
    private readonly prizeTableName;
    private readonly weight;
    constructor(prizeId: string, type: PrizeType, weight: number, options?: PrizeOptions);
    static action(prizeId: string, acquireActions: AcquireAction[], weight: number, drawnLimit?: number | null, limitFailOverPrizeId?: string | null): Prize;
    static prizeTable(prizeId: string, acquireActions: AcquireAction[], prizeTableName: string, weight: number, drawnLimit?: number | null): Prize;
    properties(): {
        [name: string]: any;
    };
}
