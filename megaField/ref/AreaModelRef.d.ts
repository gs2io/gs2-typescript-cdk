import LayerModelRef from "./LayerModelRef";
export default class AreaModelRef {
    private readonly namespaceName;
    private readonly areaModelName;
    constructor(namespaceName: string, areaModelName: string);
    layerModel(layerModelName: string): LayerModelRef;
    grn(): string;
}
