import BuffTargetGrn from "./BuffTargetGrn";
import { BuffTargetModelOptions } from "./options/BuffTargetModelOptions";
export default class BuffTargetModel {
    private readonly targetModelName;
    private readonly targetFieldName;
    private readonly conditionGrns;
    private readonly rate;
    constructor(targetModelName: string, targetFieldName: string, conditionGrns: BuffTargetGrn[], rate: number, options?: BuffTargetModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
