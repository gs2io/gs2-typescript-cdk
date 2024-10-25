import NotificationSetting from "../../../core/model/NotificationSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    changeNotification?: NotificationSetting | null;
    joinNotification?: NotificationSetting | null;
    leaveNotification?: NotificationSetting | null;
    changeMemberNotification?: NotificationSetting | null;
    receiveRequestNotification?: NotificationSetting | null;
    removeRequestNotification?: NotificationSetting | null;
    createGuildScript?: ScriptSetting | null;
    updateGuildScript?: ScriptSetting | null;
    joinGuildScript?: ScriptSetting | null;
    leaveGuildScript?: ScriptSetting | null;
    changeRoleScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
}
