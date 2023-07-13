import { AcquireAction } from "../../core/model";
import { RewardOptions } from "./options/RewardOptions";
export default class Reward {
    private readonly acquireActions;
    constructor(acquireActions: AcquireAction[], options?: RewardOptions | null);
    properties(): {
        [name: string]: any;
    };
}
