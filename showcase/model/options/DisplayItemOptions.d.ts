import SalesItem from "../SalesItem";
import SalesItemGroup from "../SalesItemGroup";
export interface DisplayItemOptions {
    salesItem?: SalesItem | null;
    salesItemGroup?: SalesItemGroup | null;
    salesPeriodEventId?: string | null;
}
