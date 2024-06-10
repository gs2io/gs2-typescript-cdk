export default class GlobalRankingModelRef {
    private readonly namespaceName;
    private readonly rankingName;
    constructor(namespaceName: string, rankingName: string);
    grn(): string;
}
