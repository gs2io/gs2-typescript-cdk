import TransactionSetting from "../../../core/model/TransactionSetting";
import TransactionSettingV2 from "../TransactionSettingV2";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    /** @deprecated */
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    changePasswordIfTakeOver?: boolean | null;
    differentUserIdForLoginAndDataRetention?: boolean | null;
    createAccountScript?: ScriptSetting | null;
    authenticationScript?: ScriptSetting | null;
    createTakeOverScript?: ScriptSetting | null;
    doTakeOverScript?: ScriptSetting | null;
    banScript?: ScriptSetting | null;
    unBanScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
