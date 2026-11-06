import { TransactionSetting } from "../../../core/model";
import TransactionSettingV2 from "../TransactionSettingV2";
import { NotificationSetting } from "../../../core/model";
import { LogSetting } from "../../../core/model";
export interface NamespaceServerTypeIsRelayOptions {
    description?: string | null;
    transactionSetting?: TransactionSetting | null;
    transactionSettingV2?: TransactionSettingV2 | null;
    stateMachineVersion?: number | null;
    createNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
    revision?: number | null;
}
