import { NotificationSetting } from "../../../core/model";
import { LogSetting } from "../../../core/model";
export interface NamespaceOptions {
    description?: string | null;
    runNotification?: NotificationSetting | null;
    pushNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
    revision?: number | null;
}
