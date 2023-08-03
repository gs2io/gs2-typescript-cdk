export default class BalanceParameterModelRef {
    private readonly namespaceName;
    private readonly parameterName;
    constructor(namespaceName: string, parameterName: string);
    grn(): string;
}
