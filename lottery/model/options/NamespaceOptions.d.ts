import TransactionSetting from "../../../core/model/TransactionSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    lotteryTriggerScriptId?: string | null;
    choicePrizeTableScriptId?: string | null;
    logSetting?: LogSetting | null;
    queueNamespaceId?: string | null;
    keyId?: string | null;
}
