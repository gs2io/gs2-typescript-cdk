import RankingReward from "../RankingReward";
export interface ClusterRankingModelOptions {
    metadata?: string | null;
    minimumValue?: number | null;
    maximumValue?: number | null;
    entryPeriodEventId?: string | null;
    rankingRewards?: RankingReward[] | null;
    accessPeriodEventId?: string | null;
}
