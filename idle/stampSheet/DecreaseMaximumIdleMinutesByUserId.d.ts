import { ConsumeAction } from "../../core/model";
export default class DecreaseMaximumIdleMinutesByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly categoryName;
    private readonly decreaseMinutes;
    constructor(namespaceName: string, categoryName: string, decreaseMinutes?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
