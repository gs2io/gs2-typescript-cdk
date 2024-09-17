export declare const TriggerVerifyType: {
    readonly NOT_TRIGGERD: "notTriggerd";
    readonly ELAPSED: "elapsed";
    readonly NOT_ELAPSED: "notElapsed";
};
export type TriggerVerifyType = typeof TriggerVerifyType[keyof typeof TriggerVerifyType];
