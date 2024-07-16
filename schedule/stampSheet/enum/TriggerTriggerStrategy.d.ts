export declare const TriggerTriggerStrategy: {
    readonly RENEW: "renew";
    readonly EXTEND: "extend";
    readonly DROP: "drop";
};
export type TriggerTriggerStrategy = typeof TriggerTriggerStrategy[keyof typeof TriggerTriggerStrategy];
