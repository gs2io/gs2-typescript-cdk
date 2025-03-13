import AppleAppStoreSubscriptionContent from "../AppleAppStoreSubscriptionContent";
import GooglePlaySubscriptionContent from "../GooglePlaySubscriptionContent";
export interface StoreSubscriptionContentModelTriggerExtendModeIsJustOptions {
    metadata?: string | null;
    appleAppStore?: AppleAppStoreSubscriptionContent | null;
    googlePlay?: GooglePlaySubscriptionContent | null;
}
