import SalesItem from "./SalesItem";
import { SalesItemGroupOptions } from "./options/SalesItemGroupOptions";
export default class SalesItemGroup {
    private readonly name;
    private readonly salesItems;
    private readonly metadata;
    constructor(name: string, salesItems: SalesItem[], options?: SalesItemGroupOptions | null);
    properties(): {
        [name: string]: any;
    };
}
