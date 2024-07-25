import { VerifyAction } from "../../../core/model";
import { ConsumeAction } from "../../../core/model";
export interface SalesItemOptions {
    metadata?: string | null;
    verifyActions?: VerifyAction[] | null;
    consumeActions?: ConsumeAction[] | null;
}
