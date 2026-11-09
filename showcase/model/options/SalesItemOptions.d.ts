import { VerifyAction } from "../../../core/model";
import { ConsumeAction } from "../../../core/model";
import Bonus from "../Bonus";
export interface SalesItemOptions {
    metadata?: string | null;
    verifyActions?: VerifyAction[] | null;
    consumeActions?: ConsumeAction[] | null;
    bonuses?: Bonus[] | null;
}
