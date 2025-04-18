export declare const CounterResetType: {
    readonly NOT_RESET: "notReset";
    readonly DAILY: "daily";
    readonly WEEKLY: "weekly";
    readonly MONTHLY: "monthly";
    readonly DAYS: "days";
};
export type CounterResetType = typeof CounterResetType[keyof typeof CounterResetType];
