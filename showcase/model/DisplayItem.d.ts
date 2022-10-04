import SalesItem from "../model/SalesItem";
import SalesItemGroup from "../model/SalesItemGroup";
export declare const DisplayItemType: {
    readonly SALES_ITEM: "salesItem";
    readonly SALES_ITEM_GROUP: "salesItemGroup";
};
export declare type DisplayItemType = typeof DisplayItemType[keyof typeof DisplayItemType];
import DisplayItemRef from "../ref/DisplayItemRef";
export interface DisplayItemOptions {
    salesItem?: SalesItem | null | undefined;
    salesItemGroup?: SalesItemGroup | null | undefined;
    salesPeriodEventId?: string | null | undefined;
}
export interface DisplayItemSalesItemOptions {
    salesItem?: SalesItem | null | undefined;
    salesPeriodEventId?: string | null | undefined;
}
export interface DisplayItemSalesItemGroupOptions {
    salesItemGroup?: SalesItemGroup | null | undefined;
    salesPeriodEventId?: string | null | undefined;
}
export default class DisplayItem {
    private readonly displayItemId;
    private readonly type;
    private readonly salesItem;
    private readonly salesItemGroup;
    private readonly salesPeriodEventId;
    constructor(displayItemId: string, type: DisplayItemType, options?: DisplayItemOptions);
    static salesItem(displayItemId: string, salesItem: SalesItem, options?: DisplayItemSalesItemOptions): DisplayItem;
    static salesItemGroup(displayItemId: string, salesItemGroup: SalesItemGroup, options?: DisplayItemSalesItemGroupOptions): DisplayItem;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): DisplayItemRef;
}
