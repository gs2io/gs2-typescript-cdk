import { VerifyAction } from "../../../core/model";
import { AcquireAction } from "../../../core/model";
export interface NodeModelOptions {
    metadata?: string | null;
    releaseVerifyActions?: VerifyAction[] | null;
    returnAcquireActions?: AcquireAction[] | null;
    premiseNodeNames?: string[] | null;
}
