import { AcquireAction } from "../../core/model";
export default class StartStateMachineByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly args;
    private readonly ttl;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, args?: string | null, ttl?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
