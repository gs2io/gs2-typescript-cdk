import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    joinNotification?: NotificationSetting | null;
    leaveNotification?: NotificationSetting | null;
    changeMemberNotification?: NotificationSetting | null;
    receiveRequestNotification?: NotificationSetting | null;
    removeRequestNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
