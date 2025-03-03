import { AppleAppStoreSubscriptionContentOptions } from "./options/AppleAppStoreSubscriptionContentOptions";
export default class AppleAppStoreSubscriptionContent {
    private readonly subscriptionGroupIdentifier;
    constructor(options?: AppleAppStoreSubscriptionContentOptions | null);
    properties(): {
        [name: string]: any;
    };
}
