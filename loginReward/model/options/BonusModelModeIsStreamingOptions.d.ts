import Reward from "../Reward";
import { ConsumeAction } from "../../../core/model";
export interface BonusModelModeIsStreamingOptions {
    metadata?: string | null;
    periodEventId?: string | null;
    rewards?: Reward[] | null;
    missedReceiveReliefConsumeActions?: ConsumeAction[] | null;
}
