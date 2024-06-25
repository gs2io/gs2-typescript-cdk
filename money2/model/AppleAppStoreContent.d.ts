import { AppleAppStoreContentOptions } from "./options/AppleAppStoreContentOptions";
export default class AppleAppStoreContent {
    private readonly productId;
    constructor(options?: AppleAppStoreContentOptions | null);
    properties(): {
        [name: string]: any;
    };
}
