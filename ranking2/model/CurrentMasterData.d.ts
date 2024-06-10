import { CdkResource, Stack } from "../../core/model";
import GlobalRankingModel from "./GlobalRankingModel";
import ClusterRankingModel from "./ClusterRankingModel";
import SubscribeRankingModel from "./SubscribeRankingModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly globalRankingModels;
    private readonly clusterRankingModels;
    private readonly subscribeRankingModels;
    constructor(stack: Stack, namespaceName: string, globalRankingModels: GlobalRankingModel[], clusterRankingModels: ClusterRankingModel[], subscribeRankingModels: SubscribeRankingModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
