import AreaModelRef from "./AreaModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    areaModel(areaModelName: string): AreaModelRef;
    grn(): string;
}
