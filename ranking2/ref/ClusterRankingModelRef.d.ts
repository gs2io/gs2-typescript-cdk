export default class ClusterRankingModelRef {
    private readonly namespaceName;
    private readonly rankingName;
    constructor(namespaceName: string, rankingName: string);
    grn(): string;
}
