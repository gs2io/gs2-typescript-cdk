export declare const StatusVerifyType: {
    readonly RELEASED: "released";
    readonly NOT_RELEASED: "notReleased";
};
export type StatusVerifyType = typeof StatusVerifyType[keyof typeof StatusVerifyType];
