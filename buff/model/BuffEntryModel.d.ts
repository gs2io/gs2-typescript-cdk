import BuffTargetModel from "./BuffTargetModel";
import BuffTargetAction from "./BuffTargetAction";
import { BuffEntryModelOptions } from "./options/BuffEntryModelOptions";
import { BuffEntryModelTargetTypeIsModelOptions } from "./options/BuffEntryModelTargetTypeIsModelOptions";
import { BuffEntryModelTargetTypeIsActionOptions } from "./options/BuffEntryModelTargetTypeIsActionOptions";
import { BuffEntryModelTargetType } from "./enum/BuffEntryModelTargetType";
import { BuffEntryModelExpression } from "./enum/BuffEntryModelExpression";
export default class BuffEntryModel {
    private readonly name;
    private readonly targetType;
    private readonly expression;
    private readonly priority;
    private readonly metadata;
    private readonly targetModel;
    private readonly targetAction;
    private readonly applyPeriodScheduleEventId;
    constructor(name: string, targetType: BuffEntryModelTargetType, expression: BuffEntryModelExpression, priority: number, options?: BuffEntryModelOptions | null);
    static targetTypeIsModel(name: string, expression: BuffEntryModelExpression, priority: number, targetModel: BuffTargetModel, options?: BuffEntryModelTargetTypeIsModelOptions | null): BuffEntryModel;
    static targetTypeIsAction(name: string, expression: BuffEntryModelExpression, priority: number, targetAction: BuffTargetAction, options?: BuffEntryModelTargetTypeIsActionOptions | null): BuffEntryModel;
    properties(): {
        [name: string]: any;
    };
}
