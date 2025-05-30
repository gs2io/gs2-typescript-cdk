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
import FixedTiming from "../FixedTiming";
import Scope from "../Scope";
import GlobalRankingSetting from "../GlobalRankingSetting";
import { CategoryModelOrderDirection } from "../enums/CategoryModelOrderDirection";
import { CategoryModelScope } from "../enums/CategoryModelScope";

export interface CategoryModelOptions {
    metadata?: string|null;
    minimumValue?: number|null;
    maximumValue?: number|null;
    globalRankingSetting?: GlobalRankingSetting|null;
    entryPeriodEventId?: string|null;
    accessPeriodEventId?: string|null;
    uniqueByUserId?: boolean|null;
    calculateFixedTimingHour?: number|null;
    calculateFixedTimingMinute?: number|null;
    calculateIntervalMinutes?: number|null;
    additionalScopes?: Scope[]|null;
    ignoreUserIds?: string[]|null;
    generation?: string|null;
}

