import { AcquireAction } from "../../core/model";
import { RandomDisplayItemModelOptions } from "./options/RandomDisplayItemModelOptions";
export default class RandomDisplayItemModel {
    private readonly name;
    private readonly acquireActions;
    private readonly stock;
    private readonly weight;
    private readonly metadata;
    private readonly verifyActions;
    private readonly consumeActions;
    constructor(name: string, acquireActions: AcquireAction[], stock: number, weight: number, options?: RandomDisplayItemModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
