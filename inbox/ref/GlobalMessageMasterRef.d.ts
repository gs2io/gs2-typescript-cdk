export default class GlobalMessageMasterRef {
    private namespaceName;
    private globalMessageName;
    constructor(namespaceName: string, globalMessageName: string);
    grn(): string;
}
