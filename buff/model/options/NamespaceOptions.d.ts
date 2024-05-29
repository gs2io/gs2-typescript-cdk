import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    applyBuffScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
