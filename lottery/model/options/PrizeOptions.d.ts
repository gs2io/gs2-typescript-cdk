import { AcquireAction } from "../../../core/model";
export interface PrizeOptions {
    acquireActions?: AcquireAction[] | null;
    drawnLimit?: number | null;
    limitFailOverPrizeId?: string | null;
    prizeTableName?: string | null;
}
