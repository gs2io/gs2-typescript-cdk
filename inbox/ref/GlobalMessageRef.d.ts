export default class GlobalMessageRef {
    private namespaceName;
    private globalMessageName;
    constructor(namespaceName: string, globalMessageName: string);
    grn(): string;
}
