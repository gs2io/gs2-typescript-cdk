import { AcquireAction } from "../../../core/model";
export interface NodeModelOptions {
    metadata?: string | null;
    returnAcquireActions?: AcquireAction[] | null;
    premiseNodeNames?: string[] | null;
}
