import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    overflowTriggerScript?: string | null;
    logSetting?: LogSetting | null;
}
