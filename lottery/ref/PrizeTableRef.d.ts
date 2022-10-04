import PrizeLimitRef from "./PrizeLimitRef";
export default class PrizeTableRef {
    private namespaceName;
    private prizeTableName;
    constructor(namespaceName: string, prizeTableName: string);
    prizeLimit(prizeId: string): PrizeLimitRef;
    grn(): string;
}
