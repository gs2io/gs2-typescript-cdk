import SeasonModelRef from "./SeasonModelRef";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    seasonModel(seasonName: string): SeasonModelRef;
    grn(): string;
}
