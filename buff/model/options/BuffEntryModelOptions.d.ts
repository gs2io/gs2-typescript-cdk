import BuffTargetModel from "../BuffTargetModel";
import BuffTargetAction from "../BuffTargetAction";
export interface BuffEntryModelOptions {
    metadata?: string | null;
    targetModel?: BuffTargetModel | null;
    targetAction?: BuffTargetAction | null;
    applyPeriodScheduleEventId?: string | null;
}
