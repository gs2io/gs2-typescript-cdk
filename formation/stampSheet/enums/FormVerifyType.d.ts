export declare const FormVerifyType: {
    readonly LESS: "less";
    readonly LESS_EQUAL: "lessEqual";
    readonly GREATER: "greater";
    readonly GREATER_EQUAL: "greaterEqual";
    readonly EQUAL: "equal";
    readonly NOT_EQUAL: "notEqual";
};
export type FormVerifyType = typeof FormVerifyType[keyof typeof FormVerifyType];
