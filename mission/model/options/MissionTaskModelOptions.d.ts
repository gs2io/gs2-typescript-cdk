import { AcquireAction } from "../../../core/model";
import { MissionTaskModelTargetResetType } from "../enum/MissionTaskModelTargetResetType";
export interface MissionTaskModelOptions {
    metadata?: string | null;
    targetResetType?: MissionTaskModelTargetResetType | null;
    completeAcquireActions?: AcquireAction[] | null;
    challengePeriodEventId?: string | null;
    premiseMissionTaskName?: string | null;
}
