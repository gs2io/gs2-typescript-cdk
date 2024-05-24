import { AcquireAction } from "../../core/model";
import TimeSpan from "../model/TimeSpan";
export default class SendMessageByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly metadata;
    private readonly readAcquireActions;
    private readonly expiresAt;
    private readonly expiresTimeSpan;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, metadata: string, readAcquireActions?: AcquireAction[] | null, expiresAt?: number | null, expiresTimeSpan?: TimeSpan | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
