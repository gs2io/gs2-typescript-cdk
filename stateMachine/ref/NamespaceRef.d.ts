import StartStateMachineByUserId from "../stampSheet/StartStateMachineByUserId";
import { StatusEnableSpeculativeExecution } from "../stampSheet/enum/StatusEnableSpeculativeExecution";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    startStateMachine(args?: string | null, enableSpeculativeExecution?: StatusEnableSpeculativeExecution | null, ttl?: number | null, userId?: string): StartStateMachineByUserId;
    grn(): string;
}
