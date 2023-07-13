import Reward from "../Reward";
import { ConsumeAction } from "../../../core/model";
export interface BonusModelMissedReceiveReliefIsEnabledOptions {
    metadata?: string | null;
    periodEventId?: string | null;
    rewards?: Reward[] | null;
    missedReceiveReliefConsumeActions?: ConsumeAction[] | null;
}
