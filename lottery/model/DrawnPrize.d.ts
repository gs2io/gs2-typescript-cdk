import { DrawnPrizeOptions } from "./options/DrawnPrizeOptions";
export default class DrawnPrize {
    private readonly prizeId;
    private readonly acquireActions;
    constructor(prizeId: string, options?: DrawnPrizeOptions | null);
    properties(): {
        [name: string]: any;
    };
}
