import { EntryModelOptions } from "./options/EntryModelOptions";
export default class EntryModel {
    private readonly name;
    private readonly metadata;
    constructor(name: string, options?: EntryModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
