export declare const ItemSetVerifyType: {
    readonly LESS: "less";
    readonly LESS_EQUAL: "lessEqual";
    readonly GREATER: "greater";
    readonly GREATER_EQUAL: "greaterEqual";
    readonly EQUAL: "equal";
    readonly NOT_EQUAL: "notEqual";
};
export type ItemSetVerifyType = typeof ItemSetVerifyType[keyof typeof ItemSetVerifyType];
