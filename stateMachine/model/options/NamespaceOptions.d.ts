import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    startScript?: ScriptSetting | null;
    passScript?: ScriptSetting | null;
    errorScript?: ScriptSetting | null;
    lowestStateMachineVersion?: number | null;
    logSetting?: LogSetting | null;
}
