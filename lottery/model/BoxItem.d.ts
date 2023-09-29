import { BoxItemOptions } from "./options/BoxItemOptions";
export default class BoxItem {
    private readonly prizeId;
    private readonly remaining;
    private readonly initial;
    private readonly acquireActions;
    constructor(prizeId: string, remaining: number, initial: number, options?: BoxItemOptions | null);
    properties(): {
        [name: string]: any;
    };
}
