import TransactionSetting from "../../../core/model/TransactionSetting";
import TransactionSettingV2 from "../TransactionSettingV2";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    /** @deprecated */
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    appleKey?: string | null;
    googleKey?: string | null;
    enableFakeReceipt?: boolean | null;
    createWalletScript?: ScriptSetting | null;
    depositScript?: ScriptSetting | null;
    withdrawScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
