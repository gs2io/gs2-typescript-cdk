import { TransactionSetting } from "../../../core/model";
import { ScriptSetting } from "../../../core/model";
import { LogSetting } from "../../../core/model";
export interface NamespaceSupportSpeculativeExecutionIsEnableOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    startScript?: ScriptSetting | null;
    passScript?: ScriptSetting | null;
    errorScript?: ScriptSetting | null;
    lowestStateMachineVersion?: number | null;
    logSetting?: LogSetting | null;
    revision?: number | null;
}
