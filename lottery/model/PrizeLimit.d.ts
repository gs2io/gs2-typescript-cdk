import { PrizeLimitOptions } from "./options/PrizeLimitOptions";
export default class PrizeLimit {
    private readonly prizeId;
    private readonly drawnCount;
    private readonly createdAt;
    private readonly updatedAt;
    constructor(prizeId: string, drawnCount: number, createdAt: number, updatedAt: number, options?: PrizeLimitOptions | null);
    properties(): {
        [name: string]: any;
    };
}
