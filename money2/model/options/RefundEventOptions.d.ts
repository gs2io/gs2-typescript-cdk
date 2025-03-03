import AppleAppStoreVerifyReceiptEvent from "../AppleAppStoreVerifyReceiptEvent";
import GooglePlayVerifyReceiptEvent from "../GooglePlayVerifyReceiptEvent";
export interface RefundEventOptions {
    appleAppStoreRefundEvent?: AppleAppStoreVerifyReceiptEvent | null;
    googlePlayRefundEvent?: GooglePlayVerifyReceiptEvent | null;
}
