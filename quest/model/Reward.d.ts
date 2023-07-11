import { RewardOptions } from "./options/RewardOptions";
export default class Reward {
    private readonly action;
    private readonly request;
    private readonly itemId;
    private readonly value;
    constructor(action: string, request: string, itemId: string, value: number, options?: RewardOptions | null);
    properties(): {
        [name: string]: any;
    };
}
