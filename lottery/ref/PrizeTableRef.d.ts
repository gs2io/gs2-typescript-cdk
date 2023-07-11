export default class PrizeTableRef {
    private readonly namespaceName;
    private readonly prizeTableName;
    constructor(namespaceName: string, prizeTableName: string);
    grn(): string;
}
