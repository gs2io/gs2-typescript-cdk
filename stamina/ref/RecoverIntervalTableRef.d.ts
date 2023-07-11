export default class RecoverIntervalTableRef {
    private readonly namespaceName;
    private readonly recoverIntervalTableName;
    constructor(namespaceName: string, recoverIntervalTableName: string);
    grn(): string;
}
