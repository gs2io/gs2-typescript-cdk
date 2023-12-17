import TransactionSetting from "../../../core/model/TransactionSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
import { NamespaceSupportSpeculativeExecution } from "../enum/NamespaceSupportSpeculativeExecution";
export interface NamespaceOptions {
    description?: string | null;
    supportSpeculativeExecution?: NamespaceSupportSpeculativeExecution | null;
    transactionSetting?: TransactionSetting | null;
    startScript?: ScriptSetting | null;
    passScript?: ScriptSetting | null;
    errorScript?: ScriptSetting | null;
    lowestStateMachineVersion?: number | null;
    logSetting?: LogSetting | null;
}
