export interface TransactionSettingOptions {
    enableAtomicCommit?: boolean | null;
    transactionUseDistributor?: boolean | null;
    acquireActionUseJobQueue?: boolean | null;
    distributorNamespaceId?: string | null;
    queueNamespaceId?: string | null;
}
