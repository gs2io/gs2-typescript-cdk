import SalesItem from "./SalesItem";
export interface SalesItemGroupOptions {
    metadata?: string | null | undefined;
}
export default class SalesItemGroup {
    private readonly name;
    private readonly metadata;
    private readonly salesItems;
    constructor(name: string, salesItems: SalesItem[], options?: SalesItemGroupOptions);
    properties(): {
        [name: string]: any;
    };
}
