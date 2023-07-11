import Prize from "./Prize";
import { PrizeTableOptions } from "./options/PrizeTableOptions";
export default class PrizeTable {
    private readonly name;
    private readonly prizes;
    private readonly metadata;
    constructor(name: string, prizes: Prize[], options?: PrizeTableOptions | null);
    properties(): {
        [name: string]: any;
    };
}
