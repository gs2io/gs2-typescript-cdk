import { ConsumeAction } from "../../core/model";
export default class DecreaseMaximumIdleMinutesByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly categoryName;
    private readonly decreaseMinutes;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, categoryName: string, decreaseMinutes?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
