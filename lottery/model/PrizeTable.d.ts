import Prize from "../model/Prize";
import PrizeTableRef from "../ref/PrizeTableRef";
export interface PrizeTableOptions {
    metadata?: string | null | undefined;
}
export default class PrizeTable {
    private readonly name;
    private readonly metadata;
    private readonly prizes;
    constructor(name: string, prizes: Prize[], options?: PrizeTableOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): PrizeTableRef;
}
