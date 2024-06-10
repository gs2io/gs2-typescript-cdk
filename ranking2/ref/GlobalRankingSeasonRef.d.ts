export default class GlobalRankingSeasonRef {
    private readonly namespaceName;
    private readonly rankingName;
    private readonly season;
    constructor(namespaceName: string, rankingName: string, season: number);
    grn(): string;
}
