import { AcquireAction } from "../../core/model";
import { BonusOptions } from "./options/BonusOptions";
export default class Bonus {
    private readonly routeKey;
    private readonly acquireActions;
    constructor(routeKey: string, acquireActions: AcquireAction[], options?: BonusOptions | null);
    properties(): {
        [name: string]: any;
    };
}
