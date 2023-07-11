import { AreaModelOptions } from "./options/AreaModelOptions";
export default class AreaModel {
    private readonly name;
    private readonly metadata;
    private readonly layerModels;
    constructor(name: string, options?: AreaModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
