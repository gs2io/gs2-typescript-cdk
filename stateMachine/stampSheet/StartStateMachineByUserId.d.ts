import { AcquireAction } from "../../core/model";
import { StatusEnableSpeculativeExecution } from "./enum/StatusEnableSpeculativeExecution";
export default class StartStateMachineByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly args;
    private readonly enableSpeculativeExecution;
    private readonly ttl;
    constructor(namespaceName: string, args?: string | null, enableSpeculativeExecution?: StatusEnableSpeculativeExecution | null, ttl?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
