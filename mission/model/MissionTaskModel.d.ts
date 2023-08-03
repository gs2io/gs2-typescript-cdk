import { MissionTaskModelOptions } from "./options/MissionTaskModelOptions";
export default class MissionTaskModel {
    private readonly name;
    private readonly counterName;
    private readonly targetValue;
    private readonly metadata;
    private readonly targetResetType;
    private readonly completeAcquireActions;
    private readonly challengePeriodEventId;
    private readonly premiseMissionTaskName;
    constructor(name: string, counterName: string, targetValue: number, options?: MissionTaskModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
