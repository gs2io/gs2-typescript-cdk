import { ConsumeAction } from "../../core/model";
export default class DecreaseMaximumIdleMinutesByUserId extends ConsumeAction {
    constructor(namespaceName: string, categoryName: string, decreaseMinutes?: number | null, userId?: string | null);
}
