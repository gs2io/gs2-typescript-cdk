import StartStateMachineByUserId from "../stampSheet/StartStateMachineByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    startStateMachine(args?: string | null, ttl?: number | null, userId?: string): StartStateMachineByUserId;
    grn(): string;
}
