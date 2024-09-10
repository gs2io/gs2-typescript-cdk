import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    depositBalanceScript?: ScriptSetting | null;
    withdrawBalanceScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
