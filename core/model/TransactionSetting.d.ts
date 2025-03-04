import { TransactionSettingOptions } from "./TransactionSettingOptions";
export default class TransactionSetting {
    enableAtomicCommit?: boolean | null;
    transactionUseDistributor?: boolean | null;
    acquireActionUseJobQueue?: boolean | null;
    distributorNamespaceId: string | null;
    queueNamespaceId: string | null;
    constructor(options?: TransactionSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
