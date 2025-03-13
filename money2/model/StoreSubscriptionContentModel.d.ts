import { StoreSubscriptionContentModelOptions } from "./options/StoreSubscriptionContentModelOptions";
import { StoreSubscriptionContentModelTriggerExtendModeIsJustOptions } from "./options/StoreSubscriptionContentModelTriggerExtendModeIsJustOptions";
import { StoreSubscriptionContentModelTriggerExtendModeIsRollupHourOptions } from "./options/StoreSubscriptionContentModelTriggerExtendModeIsRollupHourOptions";
import { StoreSubscriptionContentModelTriggerExtendMode } from "./enums/StoreSubscriptionContentModelTriggerExtendMode";
export default class StoreSubscriptionContentModel {
    private readonly name;
    private readonly scheduleNamespaceId;
    private readonly triggerName;
    private readonly triggerExtendMode;
    private readonly reallocateSpanDays;
    private readonly metadata;
    private readonly rollupHour;
    private readonly appleAppStore;
    private readonly googlePlay;
    constructor(name: string, scheduleNamespaceId: string, triggerName: string, triggerExtendMode: StoreSubscriptionContentModelTriggerExtendMode, reallocateSpanDays: number, options?: StoreSubscriptionContentModelOptions | null);
    static triggerExtendModeIsJust(name: string, scheduleNamespaceId: string, triggerName: string, reallocateSpanDays: number, options?: StoreSubscriptionContentModelTriggerExtendModeIsJustOptions | null): StoreSubscriptionContentModel;
    static triggerExtendModeIsRollupHour(name: string, scheduleNamespaceId: string, triggerName: string, reallocateSpanDays: number, rollupHour: number, options?: StoreSubscriptionContentModelTriggerExtendModeIsRollupHourOptions | null): StoreSubscriptionContentModel;
    properties(): {
        [name: string]: any;
    };
}
