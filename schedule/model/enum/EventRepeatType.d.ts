export declare const EventRepeatType: {
    readonly ALWAYS: "always";
    readonly DAILY: "daily";
    readonly WEEKLY: "weekly";
    readonly MONTHLY: "monthly";
};
export type EventRepeatType = typeof EventRepeatType[keyof typeof EventRepeatType];
