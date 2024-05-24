export declare const AwaitSkipType: {
    readonly COMPLETE: "complete";
    readonly MINUTES: "minutes";
    readonly TOTAL_RATE: "totalRate";
    readonly REMAIN_RATE: "remainRate";
};
export type AwaitSkipType = typeof AwaitSkipType[keyof typeof AwaitSkipType];
