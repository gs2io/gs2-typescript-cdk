export declare const CompleteVerifyType: {
    readonly COMPLETED: "completed";
    readonly NOT_COMPLETED: "notCompleted";
    readonly RECEIVED: "received";
    readonly NOT_RECEIVED: "notReceived";
    readonly COMPLETED_AND_NOT_RECEIVED: "completedAndNotReceived";
};
export type CompleteVerifyType = typeof CompleteVerifyType[keyof typeof CompleteVerifyType];
