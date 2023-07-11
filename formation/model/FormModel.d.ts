import SlotModel from "./SlotModel";
import { FormModelOptions } from "./options/FormModelOptions";
export default class FormModel {
    private readonly name;
    private readonly slots;
    private readonly metadata;
    constructor(name: string, slots: SlotModel[], options?: FormModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
