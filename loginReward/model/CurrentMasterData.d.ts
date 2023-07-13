import { CdkResource, Stack } from "../../core/model";
import BonusModel from "./BonusModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly bonusModels;
    constructor(stack: Stack, namespaceName: string, bonusModels: BonusModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
