import { AcquireAction } from "../../../core/model";
import TimeSpan from "../TimeSpan";
export interface GlobalMessageOptions {
    readAcquireActions?: AcquireAction[] | null;
    expiresTimeSpan?: TimeSpan | null;
    expiresAt?: number | null;
}
