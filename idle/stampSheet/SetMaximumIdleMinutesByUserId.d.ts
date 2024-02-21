import { AcquireAction } from "../../core/model";
export default class SetMaximumIdleMinutesByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly categoryName;
    private readonly maximumIdleMinutes;
    constructor(namespaceName: string, categoryName: string, maximumIdleMinutes?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
