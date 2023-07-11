import { CdkResource, Stack } from "../../core/model";
import InventoryModel from "./InventoryModel";
import SimpleInventoryModel from "./SimpleInventoryModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly inventoryModels;
    private readonly simpleInventoryModels;
    constructor(stack: Stack, namespaceName: string, inventoryModels: InventoryModel[], simpleInventoryModels: SimpleInventoryModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
