import { SlotOptions } from "./options/SlotOptions";
export default class Slot {
    private readonly name;
    private readonly propertyId;
    private readonly metadata;
    constructor(name: string, options?: SlotOptions | null);
    properties(): {
        [name: string]: any;
    };
}
