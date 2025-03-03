import { CdkResource, Stack } from "../../core/model";
import StoreContentModel from "./StoreContentModel";
import StoreSubscriptionContentModel from "./StoreSubscriptionContentModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly storeContentModels;
    private readonly storeSubscriptionContentModels;
    constructor(stack: Stack, namespaceName: string, storeContentModels: StoreContentModel[], storeSubscriptionContentModels: StoreSubscriptionContentModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
