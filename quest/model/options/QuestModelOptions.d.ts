import { AcquireAction } from "../../../core/model";
import { ConsumeAction } from "../../../core/model";
export interface QuestModelOptions {
    metadata?: string | null;
    challengePeriodEventId?: string | null;
    firstCompleteAcquireActions?: AcquireAction[] | null;
    consumeActions?: ConsumeAction[] | null;
    failedAcquireActions?: AcquireAction[] | null;
    premiseQuestNames?: string[] | null;
}
