import { CdkResource, Stack } from "../../core/model";
import InventoryModel from "./InventoryModel";
export default class CurrentMasterData extends CdkResource {
    private version;
    private namespaceName;
    private readonly inventoryModels;
    constructor(stack: Stack, namespaceName: string, inventoryModels: InventoryModel[]);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
