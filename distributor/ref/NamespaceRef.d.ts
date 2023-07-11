import DistributorModelRef from "./DistributorModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    distributorModel(distributorName: string): DistributorModelRef;
    grn(): string;
}
