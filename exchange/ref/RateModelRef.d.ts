export default class RateModelRef {
    private readonly namespaceName;
    private readonly rateName;
    constructor(namespaceName: string, rateName: string);
    grn(): string;
}
