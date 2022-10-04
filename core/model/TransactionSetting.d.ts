export default class TransactionSetting {
    enableAutoRun: boolean;
    distributorNamespaceId: string | null;
    keyId: string | null;
    queueNamespaceId: string | null;
    constructor(enableAutoRun: boolean, distributorNamespaceId?: string | null, keyId?: string | null, queueNamespaceId?: string | null);
    properties(): {
        [name: string]: any;
    };
}
