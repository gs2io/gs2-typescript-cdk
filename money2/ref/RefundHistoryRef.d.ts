export default class RefundHistoryRef {
    private readonly namespaceName;
    private readonly transactionId;
    constructor(namespaceName: string, transactionId: string);
    grn(): string;
}
