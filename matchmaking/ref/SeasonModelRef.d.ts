export default class SeasonModelRef {
    private readonly namespaceName;
    private readonly seasonName;
    constructor(namespaceName: string, seasonName: string);
    grn(): string;
}
