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
import BuffTargetGrn from "../BuffTargetGrn";
import BuffTargetModel from "../BuffTargetModel";
import BuffTargetAction from "../BuffTargetAction";
import { BuffEntryModelTargetType } from "../enum/BuffEntryModelTargetType";
import { BuffEntryModelExpression } from "../enum/BuffEntryModelExpression";

export interface BuffEntryModelOptions {
    metadata?: string|null;
    targetModel?: BuffTargetModel|null;
    targetAction?: BuffTargetAction|null;
    applyPeriodScheduleEventId?: string|null;
}

