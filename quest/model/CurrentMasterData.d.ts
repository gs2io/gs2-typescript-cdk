import { CdkResource, Stack } from "../../core/model";
import QuestGroupModel from "./QuestGroupModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly groups;
    constructor(stack: Stack, namespaceName: string, groups: QuestGroupModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
