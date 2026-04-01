import BuffTargetGrn from "./BuffTargetGrn";
import { BuffTargetActionOptions } from "./options/BuffTargetActionOptions";
import { BuffTargetActionTargetActionName } from "./enums/BuffTargetActionTargetActionName";
export default class BuffTargetAction {
    private readonly targetActionName;
    private readonly targetFieldName;
    private readonly conditionGrns;
    private readonly rate;
    constructor(targetActionName: BuffTargetActionTargetActionName, targetFieldName: string, conditionGrns: BuffTargetGrn[], rate: number, options?: BuffTargetActionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
