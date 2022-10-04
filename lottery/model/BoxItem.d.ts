import { AcquireAction } from "../../core/model";
export interface BoxItemOptions {
    acquireActions?: AcquireAction[] | null | undefined;
}
export default class BoxItem {
    private readonly acquireActions;
    private readonly remaining;
    private readonly initial;
    constructor(remaining: number, initial: number, options?: BoxItemOptions);
    properties(): {
        [name: string]: any;
    };
}
