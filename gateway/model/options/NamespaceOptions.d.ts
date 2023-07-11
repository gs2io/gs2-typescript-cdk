import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    firebaseSecret?: string | null;
    logSetting?: LogSetting | null;
}
