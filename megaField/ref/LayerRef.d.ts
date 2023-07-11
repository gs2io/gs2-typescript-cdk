export default class LayerRef {
    private readonly namespaceName;
    private readonly areaModelName;
    private readonly layerModelName;
    constructor(namespaceName: string, areaModelName: string, layerModelName: string);
    grn(): string;
}
