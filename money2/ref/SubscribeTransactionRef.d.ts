export default class SubscribeTransactionRef {
    private readonly namespaceName;
    private readonly contentName;
    private readonly transactionId;
    constructor(namespaceName: string, contentName: string, transactionId: string);
    grn(): string;
}
