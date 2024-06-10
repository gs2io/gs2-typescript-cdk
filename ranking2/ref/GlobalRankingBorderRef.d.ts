export default class GlobalRankingBorderRef {
    private readonly namespaceName;
    private readonly rankingName;
    private readonly season;
    constructor(namespaceName: string, rankingName: string, season: number);
    grn(): string;
}
