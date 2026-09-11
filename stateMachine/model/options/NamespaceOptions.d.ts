import TransactionSetting from "../../../core/model/TransactionSetting";
import TransactionSettingV2 from "../TransactionSettingV2";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
import { NamespaceSupportSpeculativeExecution } from "../enums/NamespaceSupportSpeculativeExecution";
export interface NamespaceOptions {
    description?: string | null;
    supportSpeculativeExecution?: NamespaceSupportSpeculativeExecution | null;
    /** @deprecated */
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    startScript?: ScriptSetting | null;
    passScript?: ScriptSetting | null;
    errorScript?: ScriptSetting | null;
    lowestStateMachineVersion?: number | null;
    logSetting?: LogSetting | null;
}
