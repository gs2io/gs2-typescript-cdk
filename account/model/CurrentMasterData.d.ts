import { CdkResource, Stack } from "../../core/model";
import TakeOverTypeModel from "./TakeOverTypeModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly takeOverTypeModels;
    constructor(stack: Stack, namespaceName: string, takeOverTypeModels: TakeOverTypeModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
