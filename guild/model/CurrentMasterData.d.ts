import { CdkResource, Stack } from "../../core/model";
import GuildModel from "./GuildModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly guildModels;
    constructor(stack: Stack, namespaceName: string, guildModels: GuildModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
