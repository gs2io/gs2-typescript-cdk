import { CdkResource, Stack } from "../../core/model";
import InventoryModel from "./InventoryModel";
import SimpleInventoryModel from "./SimpleInventoryModel";
import BigInventoryModel from "./BigInventoryModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly inventoryModels;
    private readonly simpleInventoryModels;
    private readonly bigInventoryModels;
    constructor(stack: Stack, namespaceName: string, inventoryModels: InventoryModel[], simpleInventoryModels: SimpleInventoryModel[], bigInventoryModels: BigInventoryModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
