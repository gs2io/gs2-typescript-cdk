import { VerifyAction } from "../../../core/model";
import { AcquireAction } from "../../../core/model";
import { MissionTaskModelTargetResetType } from "../enums/MissionTaskModelTargetResetType";
export interface MissionTaskModelVerifyCompleteTypeIsCounterOptions {
    metadata?: string | null;
    verifyCompleteConsumeActions?: VerifyAction[] | null;
    completeAcquireActions?: AcquireAction[] | null;
    challengePeriodEventId?: string | null;
    premiseMissionTaskName?: string | null;
    targetResetType?: MissionTaskModelTargetResetType | null;
}
