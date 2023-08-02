import { PrizeLimitOptions } from "./options/PrizeLimitOptions";
export default class PrizeLimit {
    private readonly prizeId;
    private readonly drawnCount;
    constructor(prizeId: string, drawnCount: number, options?: PrizeLimitOptions | null);
    properties(): {
        [name: string]: any;
    };
}
