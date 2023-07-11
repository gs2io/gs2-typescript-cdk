export default class KeyRef {
    private readonly namespaceName;
    private readonly keyName;
    constructor(namespaceName: string, keyName: string);
    grn(): string;
}
