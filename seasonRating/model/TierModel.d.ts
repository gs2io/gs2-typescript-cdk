import { TierModelOptions } from "./options/TierModelOptions";
export default class TierModel {
    private readonly raiseRankBonus;
    private readonly entryFee;
    private readonly minimumChangePoint;
    private readonly maximumChangePoint;
    private readonly metadata;
    constructor(raiseRankBonus: number, entryFee: number, minimumChangePoint: number, maximumChangePoint: number, options?: TierModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
