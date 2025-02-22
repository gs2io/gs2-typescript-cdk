import { AppleAppStoreVerifyReceiptEventOptions } from "./options/AppleAppStoreVerifyReceiptEventOptions";
import { AppleAppStoreVerifyReceiptEventEnvironment } from "./enums/AppleAppStoreVerifyReceiptEventEnvironment";
export default class AppleAppStoreVerifyReceiptEvent {
    private readonly environment;
    constructor(environment: AppleAppStoreVerifyReceiptEventEnvironment, options?: AppleAppStoreVerifyReceiptEventOptions | null);
    properties(): {
        [name: string]: any;
    };
}
