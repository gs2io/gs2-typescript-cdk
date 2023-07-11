import LogSetting from "../../../core/model/LogSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
export interface NamespaceOptions {
    description?: string | null;
    logSetting?: LogSetting | null;
    doneUploadScript?: ScriptSetting | null;
}
