import { CdkResource, Stack } from "../../core/model";
import StaminaModel from "./StaminaModel";
export default class CurrentMasterData extends CdkResource {
    private version;
    private namespaceName;
    private readonly staminaModels;
    constructor(stack: Stack, namespaceName: string, staminaModels: StaminaModel[]);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
