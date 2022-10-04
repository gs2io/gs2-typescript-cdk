import CurrentDistributorMasterRef from "./CurrentDistributorMasterRef";
import DistributorModelRef from "./DistributorModelRef";
import DistributorModelMasterRef from "./DistributorModelMasterRef";
export default class NamespaceRef {
    private namespaceName;
    constructor(namespaceName: string);
    currentDistributorMaster(): CurrentDistributorMasterRef;
    distributorModel(distributorName: string): DistributorModelRef;
    distributorModelMaster(distributorName: string): DistributorModelMasterRef;
    grn(): string;
}
