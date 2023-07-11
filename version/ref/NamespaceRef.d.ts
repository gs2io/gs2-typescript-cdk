import VersionModelRef from "./VersionModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    versionModel(versionName: string): VersionModelRef;
    grn(): string;
}
