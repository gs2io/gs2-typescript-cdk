import TransactionSetting from "../../../core/model/TransactionSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    releaseScript?: ScriptSetting | null;
    restrainScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
