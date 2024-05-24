export default class BuffEntryModelRef {
    private readonly namespaceName;
    private readonly buffEntryName;
    constructor(namespaceName: string, buffEntryName: string);
    grn(): string;
}
