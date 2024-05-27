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
import FixedTiming from "./FixedTiming";
import Scope from "./Scope";
import { GlobalRankingSettingOptions } from "./options/GlobalRankingSettingOptions";

export default class GlobalRankingSetting {
    private readonly uniqueByUserId: boolean;
    private readonly calculateIntervalMinutes: number;
    private readonly calculateFixedTiming: FixedTiming|null = null;
    private readonly additionalScopes: Scope[]|null = null;
    private readonly ignoreUserIds: string[]|null = null;
    private readonly generation: string|null = null;

    public constructor(
        uniqueByUserId: boolean,
        calculateIntervalMinutes: number,
        options: GlobalRankingSettingOptions|null = null,
    ) {
        this.uniqueByUserId = uniqueByUserId;
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        this.calculateFixedTiming = options?.calculateFixedTiming ?? null;
        this.additionalScopes = options?.additionalScopes ?? null;
        this.ignoreUserIds = options?.ignoreUserIds ?? null;
        this.generation = options?.generation ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.uniqueByUserId != null) {
            properties["uniqueByUserId"] = this.uniqueByUserId;
        }
        if (this.calculateIntervalMinutes != null) {
            properties["calculateIntervalMinutes"] = this.calculateIntervalMinutes;
        }
        if (this.calculateFixedTiming != null) {
            properties["calculateFixedTiming"] = this.calculateFixedTiming?.properties(
            );
        }
        if (this.additionalScopes != null) {
            properties["additionalScopes"] = this.additionalScopes.map(v => v.properties(
                ));
        }
        if (this.ignoreUserIds != null) {
            properties["ignoreUserIds"] = this.ignoreUserIds;
        }
        if (this.generation != null) {
            properties["generation"] = this.generation;
        }

        return properties;
    }
}
