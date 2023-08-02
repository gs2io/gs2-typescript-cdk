import RandomDisplayItemModel from "./RandomDisplayItemModel";
import { RandomShowcaseOptions } from "./options/RandomShowcaseOptions";
export default class RandomShowcase {
    private readonly name;
    private readonly maximumNumberOfChoice;
    private readonly displayItems;
    private readonly baseTimestamp;
    private readonly resetIntervalHours;
    private readonly metadata;
    private readonly salesPeriodEventId;
    constructor(name: string, maximumNumberOfChoice: number, displayItems: RandomDisplayItemModel[], baseTimestamp: number, resetIntervalHours: number, options?: RandomShowcaseOptions | null);
    properties(): {
        [name: string]: any;
    };
}
