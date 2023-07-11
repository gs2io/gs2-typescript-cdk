import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    enableDirectEnhance?: boolean | null;
    enhanceScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
    queueNamespaceId?: string | null;
    keyId?: string | null;
}
