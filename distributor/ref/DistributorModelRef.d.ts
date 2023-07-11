export default class DistributorModelRef {
    private readonly namespaceName;
    private readonly distributorName;
    constructor(namespaceName: string, distributorName: string);
    grn(): string;
}
