import { CdkResource, Stack } from "../../core/model";
import MoldModel from "./MoldModel";
import PropertyFormModel from "./PropertyFormModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly moldModels;
    private readonly propertyFormModels;
    constructor(stack: Stack, namespaceName: string, moldModels: MoldModel[], propertyFormModels: PropertyFormModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
