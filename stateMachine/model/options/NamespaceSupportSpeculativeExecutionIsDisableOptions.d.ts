import { TransactionSetting } from "../../../core/model";
import TransactionSettingV2 from "../TransactionSettingV2";
import { ScriptSetting } from "../../../core/model";
import { LogSetting } from "../../../core/model";
export interface NamespaceSupportSpeculativeExecutionIsDisableOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    startScript?: ScriptSetting | null;
    passScript?: ScriptSetting | null;
    errorScript?: ScriptSetting | null;
    lowestStateMachineVersion?: number | null;
    logSetting?: LogSetting | null;
    revision?: number | null;
}
