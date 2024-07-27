import TransactionSetting from "../../../core/model/TransactionSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    enhanceScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
    enableDirectEnhance?: boolean | null;
    queueNamespaceId?: string | null;
    keyId?: string | null;
}
