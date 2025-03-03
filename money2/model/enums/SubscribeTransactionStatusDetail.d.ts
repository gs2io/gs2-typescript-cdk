export declare const SubscribeTransactionStatusDetail: {
    readonly ACTIVE_ACTIVE: "active@active";
    readonly ACTIVE_CONVERTED_FROM_TRIAL: "active@converted_from_trial";
    readonly ACTIVE_IN_TRIAL: "active@in_trial";
    readonly ACTIVE_IN_INTRO_OFFER: "active@in_intro_offer";
    readonly GRACE_CANCELED: "grace@canceled";
    readonly GRACE_GRACE_PERIOD: "grace@grace_period";
    readonly GRACE_ON_HOLD: "grace@on_hold";
    readonly INACTIVE_EXPIRED: "inactive@expired";
    readonly INACTIVE_REVOKED: "inactive@revoked";
};
export type SubscribeTransactionStatusDetail = typeof SubscribeTransactionStatusDetail[keyof typeof SubscribeTransactionStatusDetail];
