import { CdkResource, Stack } from "../../core/model";
import VersionModel from "./VersionModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly versionModels;
    constructor(stack: Stack, namespaceName: string, versionModels: VersionModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
