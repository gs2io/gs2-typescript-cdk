import { ConsumeAction } from "../../../core/model";
import { AcquireAction } from "../../../core/model";
import { MissionTaskModelTargetResetType } from "../enum/MissionTaskModelTargetResetType";
export interface MissionTaskModelVerifyCompleteTypeIsCounterOptions {
    metadata?: string | null;
    verifyCompleteConsumeActions?: ConsumeAction[] | null;
    completeAcquireActions?: AcquireAction[] | null;
    challengePeriodEventId?: string | null;
    premiseMissionTaskName?: string | null;
    targetResetType?: MissionTaskModelTargetResetType | null;
}
