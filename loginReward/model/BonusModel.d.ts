import { BonusModelOptions } from "./options/BonusModelOptions";
import { BonusModelModeIsScheduleOptions } from "./options/BonusModelModeIsScheduleOptions";
import { BonusModelModeIsStreamingOptions } from "./options/BonusModelModeIsStreamingOptions";
import { BonusModelMissedReceiveReliefIsEnabledOptions } from "./options/BonusModelMissedReceiveReliefIsEnabledOptions";
import { BonusModelMissedReceiveReliefIsDisabledOptions } from "./options/BonusModelMissedReceiveReliefIsDisabledOptions";
import { BonusModelMode } from "./enum/BonusModelMode";
import { BonusModelRepeat } from "./enum/BonusModelRepeat";
import { BonusModelMissedReceiveRelief } from "./enum/BonusModelMissedReceiveRelief";
export default class BonusModel {
    private readonly name;
    private readonly mode;
    private readonly missedReceiveRelief;
    private readonly metadata;
    private readonly periodEventId;
    private readonly resetHour;
    private readonly repeat;
    private readonly rewards;
    private readonly missedReceiveReliefVerifyActions;
    private readonly missedReceiveReliefConsumeActions;
    constructor(name: string, mode: BonusModelMode, missedReceiveRelief: BonusModelMissedReceiveRelief, options?: BonusModelOptions | null);
    static modeIsSchedule(name: string, missedReceiveRelief: BonusModelMissedReceiveRelief, options?: BonusModelModeIsScheduleOptions | null): BonusModel;
    static modeIsStreaming(name: string, missedReceiveRelief: BonusModelMissedReceiveRelief, repeat: BonusModelRepeat, options?: BonusModelModeIsStreamingOptions | null): BonusModel;
    static missedReceiveReliefIsEnabled(name: string, mode: BonusModelMode, options?: BonusModelMissedReceiveReliefIsEnabledOptions | null): BonusModel;
    static missedReceiveReliefIsDisabled(name: string, mode: BonusModelMode, options?: BonusModelMissedReceiveReliefIsDisabledOptions | null): BonusModel;
    properties(): {
        [name: string]: any;
    };
}
