import { StoreSubscriptionContentModelOptions } from "./options/StoreSubscriptionContentModelOptions";
export default class StoreSubscriptionContentModel {
    private readonly name;
    private readonly scheduleNamespaceId;
    private readonly triggerName;
    private readonly reallocateSpanDays;
    private readonly metadata;
    private readonly appleAppStore;
    private readonly googlePlay;
    constructor(name: string, scheduleNamespaceId: string, triggerName: string, reallocateSpanDays: number, options?: StoreSubscriptionContentModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
