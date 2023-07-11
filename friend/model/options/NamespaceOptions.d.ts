import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    followScript?: ScriptSetting | null;
    unfollowScript?: ScriptSetting | null;
    sendRequestScript?: ScriptSetting | null;
    cancelRequestScript?: ScriptSetting | null;
    acceptRequestScript?: ScriptSetting | null;
    rejectRequestScript?: ScriptSetting | null;
    deleteFriendScript?: ScriptSetting | null;
    updateProfileScript?: ScriptSetting | null;
    followNotification?: NotificationSetting | null;
    receiveRequestNotification?: NotificationSetting | null;
    acceptRequestNotification?: NotificationSetting | null;
    logSetting?: LogSetting | null;
}
