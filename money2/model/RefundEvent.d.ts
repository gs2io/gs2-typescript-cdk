import { RefundEventOptions } from "./options/RefundEventOptions";
import { RefundEventPlatform } from "./enums/RefundEventPlatform";
export default class RefundEvent {
    private readonly contentName;
    private readonly platform;
    private readonly appleAppStoreRefundEvent;
    private readonly googlePlayRefundEvent;
    constructor(contentName: string, platform: RefundEventPlatform, options?: RefundEventOptions | null);
    properties(): {
        [name: string]: any;
    };
}
