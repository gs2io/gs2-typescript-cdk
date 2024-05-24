import { AcquireAction } from "../../core/model";
export default class IncreaseMaximumIdleMinutesByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly categoryName;
    private readonly increaseMinutes;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, categoryName: string, increaseMinutes?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
