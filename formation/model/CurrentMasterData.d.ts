import { CdkResource, Stack } from "../../core/model";
import MoldModel from "./MoldModel";
import FormModel from "./FormModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly moldModels;
    private readonly formModels;
    constructor(stack: Stack, namespaceName: string, moldModels: MoldModel[], formModels: FormModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
