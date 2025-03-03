import { GooglePlaySubscriptionContentOptions } from "./options/GooglePlaySubscriptionContentOptions";
export default class GooglePlaySubscriptionContent {
    private readonly productId;
    constructor(options?: GooglePlaySubscriptionContentOptions | null);
    properties(): {
        [name: string]: any;
    };
}
