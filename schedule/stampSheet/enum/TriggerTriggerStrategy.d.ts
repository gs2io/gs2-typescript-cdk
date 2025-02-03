export declare const TriggerTriggerStrategy: {
    readonly RENEW: "renew";
    readonly EXTEND: "extend";
    readonly DROP: "drop";
    readonly REPEAT_CYCLE_END: "repeatCycleEnd";
    readonly REPEAT_CYCLE_NEXT_START: "repeatCycleNextStart";
    readonly ABSOLUTE_END: "absoluteEnd";
};
export type TriggerTriggerStrategy = typeof TriggerTriggerStrategy[keyof typeof TriggerTriggerStrategy];
