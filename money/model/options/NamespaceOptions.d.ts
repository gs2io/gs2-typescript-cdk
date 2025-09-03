import TransactionSetting from "../../../core/model/TransactionSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    appleKey?: string | null;
    googleKey?: string | null;
    enableFakeReceipt?: boolean | null;
    createWalletScript?: ScriptSetting | null;
    depositScript?: ScriptSetting | null;
    withdrawScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
