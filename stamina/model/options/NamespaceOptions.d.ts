import TransactionSetting from "../../../core/model/TransactionSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    overflowTriggerScript?: string | null;
    logSetting?: LogSetting | null;
}
