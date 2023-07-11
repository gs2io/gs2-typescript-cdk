import { LayerOptions } from "./options/LayerOptions";
export default class Layer {
    private readonly areaModelName;
    private readonly layerModelName;
    private readonly numberOfMinEntries;
    private readonly numberOfMaxEntries;
    private readonly height;
    private readonly createdAt;
    private readonly root;
    constructor(areaModelName: string, layerModelName: string, numberOfMinEntries: number, numberOfMaxEntries: number, height: number, createdAt: number, options?: LayerOptions | null);
    properties(): {
        [name: string]: any;
    };
}
