import AppleAppStoreContent from "../AppleAppStoreContent";
import GooglePlayContent from "../GooglePlayContent";
export interface StoreContentModelOptions {
    metadata?: string | null;
    appleAppStore?: AppleAppStoreContent | null;
    googlePlay?: GooglePlayContent | null;
}
