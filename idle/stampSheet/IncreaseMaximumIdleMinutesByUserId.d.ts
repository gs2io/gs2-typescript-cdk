import { AcquireAction } from "../../core/model";
export default class IncreaseMaximumIdleMinutesByUserId extends AcquireAction {
    constructor(namespaceName: string, categoryName: string, increaseMinutes?: number | null, userId?: string | null);
}
