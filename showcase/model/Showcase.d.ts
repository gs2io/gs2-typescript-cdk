import DisplayItem from "./DisplayItem";
import { ShowcaseOptions } from "./options/ShowcaseOptions";
export default class Showcase {
    private readonly name;
    private readonly displayItems;
    private readonly metadata;
    private readonly salesPeriodEventId;
    constructor(name: string, displayItems: DisplayItem[], options?: ShowcaseOptions | null);
    properties(): {
        [name: string]: any;
    };
}
