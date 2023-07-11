import { CdkResource, Stack } from "../../core/model";
import EntryModel from "./EntryModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly entryModels;
    constructor(stack: Stack, namespaceName: string, entryModels: EntryModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
