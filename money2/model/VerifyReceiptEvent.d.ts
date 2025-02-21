import { VerifyReceiptEventOptions } from "./options/VerifyReceiptEventOptions";
import { VerifyReceiptEventPlatform } from "./enums/VerifyReceiptEventPlatform";
export default class VerifyReceiptEvent {
    private readonly contentName;
    private readonly platform;
    private readonly appleAppStoreVerifyReceiptEvent;
    private readonly googlePlayVerifyReceiptEvent;
    constructor(contentName: string, platform: VerifyReceiptEventPlatform, options?: VerifyReceiptEventOptions | null);
    properties(): {
        [name: string]: any;
    };
}
