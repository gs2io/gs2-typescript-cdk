export declare const StaminaVerifyType: {
    readonly LESS: "less";
    readonly LESS_EQUAL: "lessEqual";
    readonly GREATER: "greater";
    readonly GREATER_EQUAL: "greaterEqual";
    readonly EQUAL: "equal";
    readonly NOT_EQUAL: "notEqual";
};
export type StaminaVerifyType = typeof StaminaVerifyType[keyof typeof StaminaVerifyType];
