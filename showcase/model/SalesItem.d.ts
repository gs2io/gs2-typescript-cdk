import { AcquireAction } from "../../core/model";
import { SalesItemOptions } from "./options/SalesItemOptions";
export default class SalesItem {
    private readonly name;
    private readonly acquireActions;
    private readonly metadata;
    private readonly verifyActions;
    private readonly consumeActions;
    constructor(name: string, acquireActions: AcquireAction[], options?: SalesItemOptions | null);
    properties(): {
        [name: string]: any;
    };
}
