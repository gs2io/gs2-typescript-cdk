import { SimpleItemModelOptions } from "./options/SimpleItemModelOptions";
export default class SimpleItemModel {
    private readonly name;
    private readonly metadata;
    constructor(name: string, options?: SimpleItemModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
