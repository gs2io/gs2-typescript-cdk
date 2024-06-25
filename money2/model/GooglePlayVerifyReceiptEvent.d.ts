import { GooglePlayVerifyReceiptEventOptions } from "./options/GooglePlayVerifyReceiptEventOptions";
export default class GooglePlayVerifyReceiptEvent {
    private readonly purchaseToken;
    constructor(options?: GooglePlayVerifyReceiptEventOptions | null);
    properties(): {
        [name: string]: any;
    };
}
