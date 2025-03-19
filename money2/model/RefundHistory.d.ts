import RefundEvent from "./RefundEvent";
import { RefundHistoryOptions } from "./options/RefundHistoryOptions";
export default class RefundHistory {
    private readonly transactionId;
    private readonly year;
    private readonly month;
    private readonly day;
    private readonly detail;
    private readonly userId;
    constructor(transactionId: string, year: number, month: number, day: number, detail: RefundEvent, options?: RefundHistoryOptions | null);
    properties(): {
        [name: string]: any;
    };
}
