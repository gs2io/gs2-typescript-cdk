import { GooglePlayContentOptions } from "./options/GooglePlayContentOptions";
export default class GooglePlayContent {
    private readonly productId;
    constructor(options?: GooglePlayContentOptions | null);
    properties(): {
        [name: string]: any;
    };
}
