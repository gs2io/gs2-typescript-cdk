export declare const ReceiptStore: {
    readonly APPLE_APP_STORE: "AppleAppStore";
    readonly GOOGLE_PLAY: "GooglePlay";
    readonly FAKE: "fake";
};
export type ReceiptStore = typeof ReceiptStore[keyof typeof ReceiptStore];
