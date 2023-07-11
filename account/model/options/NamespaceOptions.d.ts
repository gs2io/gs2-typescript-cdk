import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    changePasswordIfTakeOver?: boolean | null;
    differentUserIdForLoginAndDataRetention?: boolean | null;
    createAccountScript?: ScriptSetting | null;
    authenticationScript?: ScriptSetting | null;
    createTakeOverScript?: ScriptSetting | null;
    doTakeOverScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
