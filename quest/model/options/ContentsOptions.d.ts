import { AcquireAction } from "../../../core/model";
export interface ContentsOptions {
    metadata?: string | null;
    completeAcquireActions?: AcquireAction[] | null;
}
