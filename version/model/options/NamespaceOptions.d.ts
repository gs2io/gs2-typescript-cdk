import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    acceptVersionScript?: ScriptSetting | null;
    checkVersionTriggerScriptId?: string | null;
    logSetting?: LogSetting | null;
}
