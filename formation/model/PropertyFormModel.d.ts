import SlotModel from "./SlotModel";
import { PropertyFormModelOptions } from "./options/PropertyFormModelOptions";
export default class PropertyFormModel {
    private readonly name;
    private readonly slots;
    private readonly metadata;
    constructor(name: string, slots: SlotModel[], options?: PropertyFormModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
