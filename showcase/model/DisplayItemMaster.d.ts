export declare const DisplayItemMasterType: {
    readonly SALES_ITEM: "salesItem";
    readonly SALES_ITEM_GROUP: "salesItemGroup";
};
export declare type DisplayItemMasterType = typeof DisplayItemMasterType[keyof typeof DisplayItemMasterType];
export interface DisplayItemMasterOptions {
    salesItemName?: string | null | undefined;
    salesItemGroupName?: string | null | undefined;
    salesPeriodEventId?: string | null | undefined;
}
export default class DisplayItemMaster {
    private readonly displayItemId;
    private readonly type;
    private readonly salesItemName;
    private readonly salesItemGroupName;
    private readonly salesPeriodEventId;
    constructor(displayItemId: string, type: DisplayItemMasterType, options?: DisplayItemMasterOptions);
    static salesItem(displayItemId: string, salesItemName: string, salesPeriodEventId?: string | null): DisplayItemMaster;
    static salesItemGroup(displayItemId: string, salesItemGroupName: string, salesPeriodEventId?: string | null): DisplayItemMaster;
    properties(): {
        [name: string]: any;
    };
}
