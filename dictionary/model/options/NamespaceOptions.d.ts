import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    entryScript?: ScriptSetting | null;
    duplicateEntryScript?: string | null;
    logSetting?: LogSetting | null;
}
