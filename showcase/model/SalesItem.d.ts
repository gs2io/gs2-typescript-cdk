import { ConsumeAction } from "../../core/model";
import { AcquireAction } from "../../core/model";
export interface SalesItemOptions {
    metadata?: string | null | undefined;
}
export default class SalesItem {
    private readonly name;
    private readonly metadata;
    private readonly consumeActions;
    private readonly acquireActions;
    constructor(name: string, consumeActions: ConsumeAction[], acquireActions: AcquireAction[], options?: SalesItemOptions);
    properties(): {
        [name: string]: any;
    };
}
