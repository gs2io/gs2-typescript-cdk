import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import DisplayItemMaster from "./DisplayItemMaster";
import ShowcaseMasterRef from "../ref/ShowcaseMasterRef";
export interface ShowcaseMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
    salesPeriodEventId?: string | null | undefined;
}
export default class ShowcaseMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly displayItems;
    private readonly salesPeriodEventId;
    constructor(stack: Stack, namespaceName: string, name: string, displayItems: DisplayItemMaster[], options?: ShowcaseMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): ShowcaseMasterRef;
    getAttrShowcaseId(): GetAttr;
}
