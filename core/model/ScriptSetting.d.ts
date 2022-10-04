export default class ScriptSetting {
    triggerScriptId: string | null;
    doneTriggerTargetType: string;
    doneTriggerScriptId: string | null;
    doneTriggerQueueNamespaceId: string | null;
    constructor(doneTriggerTargetType: string, triggerScriptId?: string | null, doneTriggerScriptId?: string | null, doneTriggerQueueNamespaceId?: string | null);
    properties(): {
        [name: string]: any;
    };
}
