import { VerifyAction } from "../../../core/model";
import { AcquireAction } from "../../../core/model";
import { MissionTaskModelTargetResetType } from "../enum/MissionTaskModelTargetResetType";
export interface MissionTaskModelVerifyCompleteTypeIsVerifyActionsOptions {
    metadata?: string | null;
    verifyCompleteConsumeActions?: VerifyAction[] | null;
    completeAcquireActions?: AcquireAction[] | null;
    challengePeriodEventId?: string | null;
    premiseMissionTaskName?: string | null;
    targetResetType?: MissionTaskModelTargetResetType | null;
}
