import AppleAppStoreVerifyReceiptEvent from "../AppleAppStoreVerifyReceiptEvent";
import GooglePlayVerifyReceiptEvent from "../GooglePlayVerifyReceiptEvent";
export interface VerifyReceiptEventOptions {
    appleAppStoreVerifyReceiptEvent?: AppleAppStoreVerifyReceiptEvent | null;
    googlePlayVerifyReceiptEvent?: GooglePlayVerifyReceiptEvent | null;
}
