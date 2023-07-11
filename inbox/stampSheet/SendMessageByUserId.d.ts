import { AcquireAction } from "../../core/model";
import TimeSpan from "../model/TimeSpan";
export default class SendMessageByUserId extends AcquireAction {
    constructor(namespaceName: string, metadata: string, readAcquireActions?: AcquireAction[] | null, expiresAt?: number | null, expiresTimeSpan?: TimeSpan | null, userId?: string | null);
}
