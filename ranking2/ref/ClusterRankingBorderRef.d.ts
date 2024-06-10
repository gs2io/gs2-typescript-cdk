export default class ClusterRankingBorderRef {
    private readonly namespaceName;
    private readonly rankingName;
    private readonly clusterName;
    private readonly season;
    constructor(namespaceName: string, rankingName: string, clusterName: string, season: number);
    grn(): string;
}
