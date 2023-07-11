import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    acquireScript?: ScriptSetting | null;
    overflowScript?: ScriptSetting | null;
    consumeScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
