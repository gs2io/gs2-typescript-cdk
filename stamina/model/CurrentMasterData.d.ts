import { CdkResource, Stack } from "../../core/model";
import StaminaModel from "./StaminaModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly staminaModels;
    constructor(stack: Stack, namespaceName: string, staminaModels: StaminaModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
