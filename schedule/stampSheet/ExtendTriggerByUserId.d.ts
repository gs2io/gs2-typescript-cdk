import { AcquireAction } from "../../core/model";
export default class ExtendTriggerByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly triggerName;
    private readonly userId;
    private readonly extendSeconds;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, triggerName: string, extendSeconds: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
