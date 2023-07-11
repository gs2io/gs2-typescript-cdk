export default class LimitModelRef {
    private readonly namespaceName;
    private readonly limitName;
    constructor(namespaceName: string, limitName: string);
    grn(): string;
}
