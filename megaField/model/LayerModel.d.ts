import { LayerModelOptions } from "./options/LayerModelOptions";
export default class LayerModel {
    private readonly name;
    private readonly metadata;
    constructor(name: string, options?: LayerModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
