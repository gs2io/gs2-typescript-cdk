import { CdkResource, Stack } from "../../core/model";
import ExperienceModel from "./ExperienceModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly experienceModels;
    constructor(stack: Stack, namespaceName: string, experienceModels: ExperienceModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
