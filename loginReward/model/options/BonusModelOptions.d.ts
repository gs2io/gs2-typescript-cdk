import Reward from "../Reward";
import { VerifyAction } from "../../../core/model";
import { ConsumeAction } from "../../../core/model";
import { BonusModelRepeat } from "../enum/BonusModelRepeat";
export interface BonusModelOptions {
    metadata?: string | null;
    periodEventId?: string | null;
    resetHour?: number | null;
    repeat?: BonusModelRepeat | null;
    rewards?: Reward[] | null;
    missedReceiveReliefVerifyActions?: VerifyAction[] | null;
    missedReceiveReliefConsumeActions?: ConsumeAction[] | null;
}
