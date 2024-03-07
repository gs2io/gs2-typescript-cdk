import { CdkResource, Stack } from "../../core/model";
import SeasonModel from "./SeasonModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly seasonModels;
    constructor(stack: Stack, namespaceName: string, seasonModels: SeasonModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
