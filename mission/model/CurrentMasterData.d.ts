import { CdkResource, Stack } from "../../core/model";
import MissionGroupModel from "./MissionGroupModel";
import CounterModel from "./CounterModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly groups;
    private readonly counters;
    constructor(stack: Stack, namespaceName: string, groups: MissionGroupModel[], counters: CounterModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
