/*
 * Copyright 2016- Game Server Services, Inc. or its affiliates. All Rights
 * Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import BuffTargetGrn from "./BuffTargetGrn";
import BuffTargetModel from "./BuffTargetModel";
import BuffTargetAction from "./BuffTargetAction";
import { BuffEntryModelOptions } from "./options/BuffEntryModelOptions";
import { BuffEntryModelTargetTypeIsModelOptions } from "./options/BuffEntryModelTargetTypeIsModelOptions";
import { BuffEntryModelTargetTypeIsActionOptions } from "./options/BuffEntryModelTargetTypeIsActionOptions";
import { BuffEntryModelExpression } from "./enums/BuffEntryModelExpression";
import { BuffEntryModelTargetType } from "./enums/BuffEntryModelTargetType";

export default class BuffEntryModel {
    private readonly name: string;
    private readonly expression: BuffEntryModelExpression;
    private readonly targetType: BuffEntryModelTargetType;
    private readonly priority: number;
    private readonly metadata: string|null = null;
    private readonly targetModel: BuffTargetModel|null = null;
    private readonly targetAction: BuffTargetAction|null = null;
    private readonly applyPeriodScheduleEventId: string|null = null;

    public constructor(
        name: string,
        expression: BuffEntryModelExpression,
        targetType: BuffEntryModelTargetType,
        priority: number,
        options: BuffEntryModelOptions|null = null,
    ) {
        this.name = name;
        this.expression = expression;
        this.targetType = targetType;
        this.priority = priority;
        this.metadata = options?.metadata ?? null;
        this.targetModel = options?.targetModel ?? null;
        this.targetAction = options?.targetAction ?? null;
        this.applyPeriodScheduleEventId = options?.applyPeriodScheduleEventId ?? null;
    }

    public static targetTypeIsModel(
        name: string,
        expression: BuffEntryModelExpression,
        priority: number,
        targetModel: BuffTargetModel,
        options: BuffEntryModelTargetTypeIsModelOptions|null = null,
    ): BuffEntryModel {
        return new BuffEntryModel(
            name,
            expression,
            BuffEntryModelTargetType.MODEL,
            priority,
            {
                targetModel: targetModel,
                metadata: options?.metadata,
                applyPeriodScheduleEventId: options?.applyPeriodScheduleEventId,
            },
        );
    }

    public static targetTypeIsAction(
        name: string,
        expression: BuffEntryModelExpression,
        priority: number,
        targetAction: BuffTargetAction,
        options: BuffEntryModelTargetTypeIsActionOptions|null = null,
    ): BuffEntryModel {
        return new BuffEntryModel(
            name,
            expression,
            BuffEntryModelTargetType.ACTION,
            priority,
            {
                targetAction: targetAction,
                metadata: options?.metadata,
                applyPeriodScheduleEventId: options?.applyPeriodScheduleEventId,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.expression != null) {
            properties["expression"] = this.expression;
        }
        if (this.targetType != null) {
            properties["targetType"] = this.targetType;
        }
        if (this.targetModel != null) {
            properties["targetModel"] = this.targetModel?.properties(
            );
        }
        if (this.targetAction != null) {
            properties["targetAction"] = this.targetAction?.properties(
            );
        }
        if (this.priority != null) {
            properties["priority"] = this.priority;
        }
        if (this.applyPeriodScheduleEventId != null) {
            properties["applyPeriodScheduleEventId"] = this.applyPeriodScheduleEventId;
        }

        return properties;
    }
}
