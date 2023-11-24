export default class TransactionSetting {
    distributorNamespaceId: string | null;
    queueNamespaceId: string | null;
    constructor(distributorNamespaceId?: string | null, queueNamespaceId?: string | null);
    properties(): {
        [name: string]: any;
    };
}
