import AppleAppStoreSubscriptionContent from "../AppleAppStoreSubscriptionContent";
import GooglePlaySubscriptionContent from "../GooglePlaySubscriptionContent";
export interface StoreSubscriptionContentModelOptions {
    metadata?: string | null;
    rollupHour?: number | null;
    appleAppStore?: AppleAppStoreSubscriptionContent | null;
    googlePlay?: GooglePlaySubscriptionContent | null;
}
