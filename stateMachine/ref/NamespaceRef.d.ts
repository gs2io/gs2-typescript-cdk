import StartStateMachineByUserId from "../stampSheet/StartStateMachineByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    startStateMachine(args: string, ttl?: number | null, userId?: string | null): StartStateMachineByUserId;
    grn(): string;
}
