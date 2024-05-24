import { AcquireAction } from "../../core/model";
export default class SetMaximumIdleMinutesByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly categoryName;
    private readonly maximumIdleMinutes;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, categoryName: string, maximumIdleMinutes?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
