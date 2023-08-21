import { BigItemModelOptions } from "./options/BigItemModelOptions";
export default class BigItemModel {
    private readonly name;
    private readonly metadata;
    constructor(name: string, options?: BigItemModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
