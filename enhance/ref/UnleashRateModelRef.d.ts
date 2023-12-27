export default class UnleashRateModelRef {
    private readonly namespaceName;
    private readonly rateName;
    constructor(namespaceName: string, rateName: string);
    grn(): string;
}
