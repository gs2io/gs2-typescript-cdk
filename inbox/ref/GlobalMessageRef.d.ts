export default class GlobalMessageRef {
    private readonly namespaceName;
    private readonly globalMessageName;
    constructor(namespaceName: string, globalMessageName: string);
    grn(): string;
}
