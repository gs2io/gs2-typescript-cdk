import { CdkResource, Stack } from "../../core/model";
import BuffEntryModel from "./BuffEntryModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly buffEntryModels;
    constructor(stack: Stack, namespaceName: string, buffEntryModels: BuffEntryModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
