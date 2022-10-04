import { AcquireAction } from "../../core/model";
export interface DrawnPrizeOptions {
    acquireActions?: AcquireAction[] | null | undefined;
}
export default class DrawnPrize {
    private readonly prizeId;
    private readonly acquireActions;
    constructor(prizeId: string, options?: DrawnPrizeOptions);
    properties(): {
        [name: string]: any;
    };
}
