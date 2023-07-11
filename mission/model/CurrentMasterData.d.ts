import { CdkResource, Stack } from "../../core/model";
import MissionGroupModel from "./MissionGroupModel";
import CounterModel from "./CounterModel";
export default class CurrentMasterData extends CdkResource {
    private readonly version;
    private readonly namespaceName;
    private readonly missionGroupModels;
    private readonly counterModels;
    constructor(stack: Stack, namespaceName: string, missionGroupModels: MissionGroupModel[], counterModels: CounterModel[]);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
}
