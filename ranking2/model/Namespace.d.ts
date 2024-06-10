import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import GlobalRankingModel from "./GlobalRankingModel";
import ClusterRankingModel from "./ClusterRankingModel";
import SubscribeRankingModel from "./SubscribeRankingModel";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly description;
    private readonly transactionSetting;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(globalRankingModels: GlobalRankingModel[], clusterRankingModels: ClusterRankingModel[], subscribeRankingModels: SubscribeRankingModel[]): Namespace;
}
