import BuffTargetGrn from "./BuffTargetGrn";
import { BuffTargetActionOptions } from "./options/BuffTargetActionOptions";
export default class BuffTargetAction {
    private readonly targetActionName;
    private readonly targetFieldName;
    private readonly conditionGrns;
    private readonly rate;
    constructor(targetActionName: string, targetFieldName: string, conditionGrns: BuffTargetGrn[], rate: number, options?: BuffTargetActionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
