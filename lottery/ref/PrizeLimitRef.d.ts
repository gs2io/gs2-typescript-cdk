export default class PrizeLimitRef {
    private readonly namespaceName;
    private readonly prizeTableName;
    private readonly prizeId;
    constructor(namespaceName: string, prizeTableName: string, prizeId: string);
    grn(): string;
}
