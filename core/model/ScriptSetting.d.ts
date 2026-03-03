import { ScriptSettingDoneTriggerTargetType } from "./nums/ScriptSettingDoneTriggerTargetType";
export default class ScriptSetting {
    triggerScriptId: string | null;
    doneTriggerTargetType: ScriptSettingDoneTriggerTargetType;
    doneTriggerScriptId: string | null;
    doneTriggerQueueNamespaceId: string | null;
    constructor(doneTriggerTargetType: ScriptSettingDoneTriggerTargetType, triggerScriptId?: string | null, doneTriggerScriptId?: string | null, doneTriggerQueueNamespaceId?: string | null);
    properties(): {
        [name: string]: any;
    };
}
