import SalesItem from "./SalesItem";
import SalesItemGroup from "./SalesItemGroup";
import { DisplayItemOptions } from "./options/DisplayItemOptions";
import { DisplayItemTypeIsSalesItemOptions } from "./options/DisplayItemTypeIsSalesItemOptions";
import { DisplayItemTypeIsSalesItemGroupOptions } from "./options/DisplayItemTypeIsSalesItemGroupOptions";
import { DisplayItemType } from "./enums/DisplayItemType";
export default class DisplayItem {
    private readonly displayItemId;
    private readonly type;
    private readonly salesItem;
    private readonly salesItemGroup;
    private readonly salesPeriodEventId;
    constructor(displayItemId: string, type: DisplayItemType, options?: DisplayItemOptions | null);
    static typeIsSalesItem(displayItemId: string, salesItem: SalesItem, options?: DisplayItemTypeIsSalesItemOptions | null): DisplayItem;
    static typeIsSalesItemGroup(displayItemId: string, salesItemGroup: SalesItemGroup, options?: DisplayItemTypeIsSalesItemGroupOptions | null): DisplayItem;
    properties(): {
        [name: string]: any;
    };
}
