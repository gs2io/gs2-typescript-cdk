import { VerifyAction } from "../../../core/model";
import { ConsumeAction } from "../../../core/model";
export interface RandomDisplayItemModelOptions {
    metadata?: string | null;
    verifyActions?: VerifyAction[] | null;
    consumeActions?: ConsumeAction[] | null;
}
