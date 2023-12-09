export declare const InventoryVerifyType: {
    readonly LESS: "less";
    readonly LESS_EQUAL: "lessEqual";
    readonly GREATER: "greater";
    readonly GREATER_EQUAL: "greaterEqual";
    readonly EQUAL: "equal";
    readonly NOT_EQUAL: "notEqual";
};
export type InventoryVerifyType = typeof InventoryVerifyType[keyof typeof InventoryVerifyType];
