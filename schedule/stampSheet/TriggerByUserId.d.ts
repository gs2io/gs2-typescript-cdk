import { AcquireAction } from "../../core/model";
import { TriggerTriggerStrategy } from "./enum/TriggerTriggerStrategy";
export default class TriggerByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly triggerName;
    private readonly userId;
    private readonly triggerStrategy;
    private readonly ttl;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, triggerName: string, triggerStrategy: TriggerTriggerStrategy, ttl: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
