import { AcquireAction } from "../../../core/model";
export interface MissionTaskModelOptions {
    metadata?: string | null;
    completeAcquireActions?: AcquireAction[] | null;
    challengePeriodEventId?: string | null;
    premiseMissionTaskName?: string | null;
}
