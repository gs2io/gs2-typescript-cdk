import TransactionSetting from "../../../core/model/TransactionSetting";
import TransactionSettingV2 from "../TransactionSettingV2";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    /** @deprecated */
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    acquireScript?: ScriptSetting | null;
    overflowScript?: ScriptSetting | null;
    consumeScript?: ScriptSetting | null;
    simpleItemAcquireScript?: ScriptSetting | null;
    simpleItemConsumeScript?: ScriptSetting | null;
    bigItemAcquireScript?: ScriptSetting | null;
    bigItemConsumeScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
