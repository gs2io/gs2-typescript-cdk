import { LabelOptions } from "./options/LabelOptions";
export default class Label {
    private readonly key;
    private readonly value;
    constructor(key: string, value: string, options?: LabelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
