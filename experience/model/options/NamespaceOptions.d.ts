import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    experienceCapScriptId?: string | null;
    changeExperienceScript?: ScriptSetting | null;
    changeRankScript?: ScriptSetting | null;
    changeRankCapScript?: ScriptSetting | null;
    overflowExperienceScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
