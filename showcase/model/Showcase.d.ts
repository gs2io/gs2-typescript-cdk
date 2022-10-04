import DisplayItem from "../model/DisplayItem";
import ShowcaseRef from "../ref/ShowcaseRef";
export interface ShowcaseOptions {
    metadata?: string | null | undefined;
    salesPeriodEventId?: string | null | undefined;
}
export default class Showcase {
    private readonly name;
    private readonly metadata;
    private readonly salesPeriodEventId;
    private readonly displayItems;
    constructor(name: string, displayItems: DisplayItem[], options?: ShowcaseOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): ShowcaseRef;
}
