import { CdkResource, Stack } from "../../core/model";
import AreaModel from "./AreaModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly areaModels;
    constructor(stack: Stack, namespaceName: string, areaModels: AreaModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
