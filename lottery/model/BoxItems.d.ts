import BoxItem from "./BoxItem";
export interface BoxItemsOptions {
    items?: BoxItem[] | null | undefined;
}
export default class BoxItems {
    private readonly boxId;
    private readonly prizeTableName;
    private readonly userId;
    private readonly items;
    constructor(boxId: string, prizeTableName: string, userId: string, options?: BoxItemsOptions);
    properties(): {
        [name: string]: any;
    };
}
