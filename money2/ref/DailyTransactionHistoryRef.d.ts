export default class DailyTransactionHistoryRef {
    private readonly namespaceName;
    private readonly year;
    private readonly month;
    private readonly day;
    private readonly currency;
    constructor(namespaceName: string, year: number, month: number, day: number, currency: string);
    grn(): string;
}
