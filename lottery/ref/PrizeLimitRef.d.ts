export default class PrizeLimitRef {
    private namespaceName;
    private prizeTableName;
    private prizeId;
    constructor(namespaceName: string, prizeTableName: string, prizeId: string);
    grn(): string;
}
