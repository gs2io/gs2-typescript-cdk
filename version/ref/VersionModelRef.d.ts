export default class VersionModelRef {
    private readonly namespaceName;
    private readonly versionName;
    constructor(namespaceName: string, versionName: string);
    grn(): string;
}
