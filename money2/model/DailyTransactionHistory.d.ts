import { DailyTransactionHistoryOptions } from "./options/DailyTransactionHistoryOptions";
export default class DailyTransactionHistory {
    private readonly year;
    private readonly month;
    private readonly day;
    private readonly currency;
    private readonly depositAmount;
    private readonly withdrawAmount;
    private readonly revision;
    constructor(year: number, month: number, day: number, currency: string, depositAmount: number, withdrawAmount: number, options?: DailyTransactionHistoryOptions | null);
    properties(): {
        [name: string]: any;
    };
}
