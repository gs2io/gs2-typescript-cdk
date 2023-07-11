export default class RecoverValueTableRef {
    private readonly namespaceName;
    private readonly recoverValueTableName;
    constructor(namespaceName: string, recoverValueTableName: string);
    grn(): string;
}
