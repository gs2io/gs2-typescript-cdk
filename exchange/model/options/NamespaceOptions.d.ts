import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";
export interface NamespaceOptions {
    description?: string | null;
    enableAwaitExchange?: boolean | null;
    enableDirectExchange?: boolean | null;
    exchangeScript?: ScriptSetting | null;
    logSetting?: LogSetting | null;
    queueNamespaceId?: string | null;
    keyId?: string | null;
}
