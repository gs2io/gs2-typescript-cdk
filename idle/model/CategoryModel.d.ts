import AcquireActionList from "./AcquireActionList";
import { CategoryModelOptions } from "./options/CategoryModelOptions";
export default class CategoryModel {
    private readonly name;
    private readonly rewardIntervalMinutes;
    private readonly defaultMaximumIdleMinutes;
    private readonly acquireActions;
    private readonly metadata;
    private readonly idlePeriodScheduleId;
    private readonly receivePeriodScheduleId;
    constructor(name: string, rewardIntervalMinutes: number, defaultMaximumIdleMinutes: number, acquireActions: AcquireActionList[], options?: CategoryModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
