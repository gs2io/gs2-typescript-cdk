import TargetCounterModel from "./TargetCounterModel";
import { MissionTaskModelOptions } from "./options/MissionTaskModelOptions";
import { MissionTaskModelVerifyCompleteTypeIsCounterOptions } from "./options/MissionTaskModelVerifyCompleteTypeIsCounterOptions";
import { MissionTaskModelVerifyCompleteTypeIsVerifyActionsOptions } from "./options/MissionTaskModelVerifyCompleteTypeIsVerifyActionsOptions";
import { MissionTaskModelVerifyCompleteType } from "./enums/MissionTaskModelVerifyCompleteType";
export default class MissionTaskModel {
    private readonly name;
    private readonly verifyCompleteType;
    private readonly metadata;
    private readonly targetCounter;
    private readonly verifyCompleteConsumeActions;
    private readonly completeAcquireActions;
    private readonly challengePeriodEventId;
    private readonly premiseMissionTaskName;
    private readonly targetResetType;
    constructor(name: string, verifyCompleteType: MissionTaskModelVerifyCompleteType, options?: MissionTaskModelOptions | null);
    static verifyCompleteTypeIsCounter(name: string, counterName: string, targetValue: number, targetCounter: TargetCounterModel, options?: MissionTaskModelVerifyCompleteTypeIsCounterOptions | null): MissionTaskModel;
    static verifyCompleteTypeIsVerifyActions(name: string, counterName: string, targetValue: number, options?: MissionTaskModelVerifyCompleteTypeIsVerifyActionsOptions | null): MissionTaskModel;
    properties(): {
        [name: string]: any;
    };
}
