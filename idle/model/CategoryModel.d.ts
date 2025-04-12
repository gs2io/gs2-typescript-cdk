import AcquireActionList from "./AcquireActionList";
import { CategoryModelOptions } from "./options/CategoryModelOptions";
import { CategoryModelRewardResetMode } from "./enums/CategoryModelRewardResetMode";
export default class CategoryModel {
    private readonly name;
    private readonly rewardIntervalMinutes;
    private readonly defaultMaximumIdleMinutes;
    private readonly rewardResetMode;
    private readonly acquireActions;
    private readonly metadata;
    private readonly idlePeriodScheduleId;
    private readonly receivePeriodScheduleId;
    constructor(name: string, rewardIntervalMinutes: number, defaultMaximumIdleMinutes: number, rewardResetMode: CategoryModelRewardResetMode, acquireActions: AcquireActionList[], options?: CategoryModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
