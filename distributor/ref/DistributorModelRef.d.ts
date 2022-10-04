export default class DistributorModelRef {
    private namespaceName;
    private distributorName;
    constructor(namespaceName: string, distributorName: string);
    grn(): string;
}
