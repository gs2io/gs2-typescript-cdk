import { SlotModelOptions } from "./options/SlotModelOptions";
export default class SlotModel {
    private readonly name;
    private readonly propertyRegex;
    private readonly metadata;
    constructor(name: string, propertyRegex: string, options?: SlotModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
