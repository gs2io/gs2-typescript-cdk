import FormModel from "./FormModel";
import { MoldModelOptions } from "./options/MoldModelOptions";
export default class MoldModel {
    private readonly name;
    private readonly initialMaxCapacity;
    private readonly maxCapacity;
    private readonly formModel;
    private readonly metadata;
    constructor(name: string, initialMaxCapacity: number, maxCapacity: number, formModel: FormModel, options?: MoldModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
