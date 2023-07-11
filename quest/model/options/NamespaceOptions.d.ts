import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    startQuestScript?: ScriptSetting | null;
    completeQuestScript?: ScriptSetting | null;
    failedQuestScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
    queueNamespaceId?: string | null;
    keyId?: string | null;
}
