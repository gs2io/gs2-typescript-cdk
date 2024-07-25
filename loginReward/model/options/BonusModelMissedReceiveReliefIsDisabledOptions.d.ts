import Reward from "../Reward";
import { VerifyAction } from "../../../core/model";
import { ConsumeAction } from "../../../core/model";
export interface BonusModelMissedReceiveReliefIsDisabledOptions {
    metadata?: string | null;
    periodEventId?: string | null;
    rewards?: Reward[] | null;
    missedReceiveReliefVerifyActions?: VerifyAction[] | null;
    missedReceiveReliefConsumeActions?: ConsumeAction[] | null;
}
