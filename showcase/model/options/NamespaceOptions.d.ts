import TransactionSetting from "../../../core/model/TransactionSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    buyScript?: ScriptSetting | null;
    queueNamespaceId?: string | null;
    keyId?: string | null;
    logSetting?: LogSetting | null;
}
