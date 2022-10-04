export default class RecoverIntervalTableRef {
    private namespaceName;
    private recoverIntervalTableName;
    constructor(namespaceName: string, recoverIntervalTableName: string);
    grn(): string;
}
