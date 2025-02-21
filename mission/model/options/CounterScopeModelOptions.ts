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
import { VerifyAction } from "../../../core/model";
import { CounterScopeModelScopeType } from "../enums/CounterScopeModelScopeType";
import { CounterScopeModelResetType } from "../enums/CounterScopeModelResetType";
import { CounterScopeModelResetDayOfWeek } from "../enums/CounterScopeModelResetDayOfWeek";

export interface CounterScopeModelOptions {
    resetType?: CounterScopeModelResetType|null;
    resetDayOfMonth?: number|null;
    resetDayOfWeek?: CounterScopeModelResetDayOfWeek|null;
    resetHour?: number|null;
    conditionName?: string|null;
    condition?: VerifyAction|null;
    anchorTimestamp?: number|null;
    days?: number|null;
}

