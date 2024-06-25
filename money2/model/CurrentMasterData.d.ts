import { CdkResource, Stack } from "../../core/model";
import StoreContentModel from "./StoreContentModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly storeContentModels;
    constructor(stack: Stack, namespaceName: string, storeContentModels: StoreContentModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
