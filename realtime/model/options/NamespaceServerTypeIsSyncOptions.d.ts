import { TransactionSetting } from "../../../core/model";
import TransactionSettingV2 from "../TransactionSettingV2";
import SyncSetting from "../SyncSetting";
import { NotificationSetting } from "../../../core/model";
import { LogSetting } from "../../../core/model";
export interface NamespaceServerTypeIsSyncOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    syncSetting?: SyncSetting | null;
    createNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
    revision?: number | null;
}
