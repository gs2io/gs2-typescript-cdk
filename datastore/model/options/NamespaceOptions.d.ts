import TransactionSetting from "../../../core/model/TransactionSetting";
import TransactionSettingV2 from "../TransactionSettingV2";
import LogSetting from "../../../core/model/LogSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
export interface NamespaceOptions {
    description?: string | null;
    /** @deprecated */
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    logSetting?: LogSetting | null;
    doneUploadScript?: ScriptSetting | null;
}
