import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    acquireScript?: ScriptSetting | null;
    overflowScript?: ScriptSetting | null;
    consumeScript?: ScriptSetting | null;
    simpleItemAcquireScript?: ScriptSetting | null;
    simpleItemConsumeScript?: ScriptSetting | null;
    bigItemAcquireScript?: ScriptSetting | null;
    bigItemConsumeScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
