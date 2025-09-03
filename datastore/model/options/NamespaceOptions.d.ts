import TransactionSetting from "../../../core/model/TransactionSetting";
import LogSetting from "../../../core/model/LogSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    logSetting?: LogSetting | null;
    doneUploadScript?: ScriptSetting | null;
}
