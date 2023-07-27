export default class StateMachineMasterRef {
    private readonly namespaceName;
    private readonly version;
    constructor(namespaceName: string, version: number);
    grn(): string;
}
