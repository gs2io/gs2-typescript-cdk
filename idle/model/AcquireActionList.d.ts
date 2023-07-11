import { AcquireActionListOptions } from "./options/AcquireActionListOptions";
export default class AcquireActionList {
    private readonly acquireActions;
    constructor(options?: AcquireActionListOptions | null);
    properties(): {
        [name: string]: any;
    };
}
