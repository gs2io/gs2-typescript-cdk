export declare const ScopedValueResetType: {
    readonly NOT_RESET: "notReset";
    readonly DAILY: "daily";
    readonly WEEKLY: "weekly";
    readonly MONTHLY: "monthly";
    readonly DAYS: "days";
};
export type ScopedValueResetType = typeof ScopedValueResetType[keyof typeof ScopedValueResetType];
