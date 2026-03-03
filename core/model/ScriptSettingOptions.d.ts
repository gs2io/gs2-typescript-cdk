import { ScriptSettingDoneTriggerTargetType } from "./nums/ScriptSettingDoneTriggerTargetType";
export interface ScriptSettingOptions {
    triggerScriptId?: string | null;
    doneTriggerTargetType?: ScriptSettingDoneTriggerTargetType;
    doneTriggerScriptId?: string | null;
    doneTriggerQueueNamespaceId?: string | null;
}
