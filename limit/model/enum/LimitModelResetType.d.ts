export declare const LimitModelResetType: {
    readonly NOT_RESET: "notReset";
    readonly DAILY: "daily";
    readonly WEEKLY: "weekly";
    readonly MONTHLY: "monthly";
    readonly DAYS: "days";
};
export type LimitModelResetType = typeof LimitModelResetType[keyof typeof LimitModelResetType];
