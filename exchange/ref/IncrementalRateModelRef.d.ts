export default class IncrementalRateModelRef {
    private readonly namespaceName;
    private readonly rateName;
    constructor(namespaceName: string, rateName: string);
    grn(): string;
}
