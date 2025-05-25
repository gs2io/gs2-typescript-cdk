export declare const StageStatus: {
    readonly ACTIVE: "Active";
    readonly UPDATING: "Updating";
    readonly UPDATE_FAILED: "UpdateFailed";
};
export type StageStatus = typeof StageStatus[keyof typeof StageStatus];
