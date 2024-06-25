import { StoreContentModelOptions } from "./options/StoreContentModelOptions";
export default class StoreContentModel {
    private readonly name;
    private readonly metadata;
    private readonly appleAppStore;
    private readonly googlePlay;
    constructor(name: string, options?: StoreContentModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
