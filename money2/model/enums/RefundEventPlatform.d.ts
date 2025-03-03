export declare const RefundEventPlatform: {
    readonly APPLE_APP_STORE: "AppleAppStore";
    readonly GOOGLE_PLAY: "GooglePlay";
    readonly FAKE: "fake";
};
export type RefundEventPlatform = typeof RefundEventPlatform[keyof typeof RefundEventPlatform];
