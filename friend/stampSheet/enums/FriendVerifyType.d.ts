export declare const FriendVerifyType: {
    readonly LESS: "less";
    readonly LESS_EQUAL: "lessEqual";
    readonly GREATER: "greater";
    readonly GREATER_EQUAL: "greaterEqual";
    readonly EQUAL: "equal";
    readonly NOT_EQUAL: "notEqual";
};
export type FriendVerifyType = typeof FriendVerifyType[keyof typeof FriendVerifyType];
