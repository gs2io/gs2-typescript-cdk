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
import GlobalRankingSetting from "./GlobalRankingSetting";
import { CategoryModelOptions } from "./options/CategoryModelOptions";
import { CategoryModelScopeIsGlobalOptions } from "./options/CategoryModelScopeIsGlobalOptions";
import { CategoryModelScopeIsScopedOptions } from "./options/CategoryModelScopeIsScopedOptions";
import { CategoryModelOrderDirection } from "./enums/CategoryModelOrderDirection";
import { CategoryModelScope } from "./enums/CategoryModelScope";

export default class CategoryModel {
    private readonly name: string;
    private readonly sum: boolean;
    private readonly orderDirection: CategoryModelOrderDirection;
    private readonly scope: CategoryModelScope;
    private readonly metadata: string|null = null;
    private readonly minimumValue: number|null = null;
    private readonly maximumValue: number|null = null;
    private readonly globalRankingSetting: GlobalRankingSetting|null = null;
    private readonly entryPeriodEventId: string|null = null;
    private readonly accessPeriodEventId: string|null = null;
    private readonly uniqueByUserId: boolean|null = null;
    private readonly calculateFixedTimingHour: number|null = null;
    private readonly calculateFixedTimingMinute: number|null = null;
    private readonly calculateIntervalMinutes: number|null = null;
    private readonly additionalScopes: Scope[]|null = null;
    private readonly ignoreUserIds: string[]|null = null;
    private readonly generation: string|null = null;

    public constructor(
        name: string,
        sum: boolean,
        orderDirection: CategoryModelOrderDirection,
        scope: CategoryModelScope,
        options: CategoryModelOptions|null = null,
    ) {
        this.name = name;
        this.sum = sum;
        this.orderDirection = orderDirection;
        this.scope = scope;
        this.metadata = options?.metadata ?? null;
        this.minimumValue = options?.minimumValue ?? null;
        this.maximumValue = options?.maximumValue ?? null;
        this.globalRankingSetting = options?.globalRankingSetting ?? null;
        this.entryPeriodEventId = options?.entryPeriodEventId ?? null;
        this.accessPeriodEventId = options?.accessPeriodEventId ?? null;
        this.uniqueByUserId = options?.uniqueByUserId ?? null;
        this.calculateFixedTimingHour = options?.calculateFixedTimingHour ?? null;
        this.calculateFixedTimingMinute = options?.calculateFixedTimingMinute ?? null;
        this.calculateIntervalMinutes = options?.calculateIntervalMinutes ?? null;
        this.additionalScopes = options?.additionalScopes ?? null;
        this.ignoreUserIds = options?.ignoreUserIds ?? null;
        this.generation = options?.generation ?? null;
    }

    public static scopeIsGlobal(
        name: string,
        sum: boolean,
        orderDirection: CategoryModelOrderDirection,
        globalRankingSetting: GlobalRankingSetting,
        uniqueByUserId: boolean,
        calculateIntervalMinutes: number,
        options: CategoryModelScopeIsGlobalOptions|null = null,
    ): CategoryModel {
        return new CategoryModel(
            name,
            sum,
            orderDirection,
            CategoryModelScope.GLOBAL,
            {
                globalRankingSetting: globalRankingSetting,
                uniqueByUserId: uniqueByUserId,
                calculateIntervalMinutes: calculateIntervalMinutes,
                metadata: options?.metadata,
                minimumValue: options?.minimumValue,
                maximumValue: options?.maximumValue,
                entryPeriodEventId: options?.entryPeriodEventId,
                accessPeriodEventId: options?.accessPeriodEventId,
                calculateFixedTimingHour: options?.calculateFixedTimingHour,
                calculateFixedTimingMinute: options?.calculateFixedTimingMinute,
                additionalScopes: options?.additionalScopes,
                ignoreUserIds: options?.ignoreUserIds,
                generation: options?.generation,
            },
        );
    }

    public static scopeIsScoped(
        name: string,
        sum: boolean,
        orderDirection: CategoryModelOrderDirection,
        options: CategoryModelScopeIsScopedOptions|null = null,
    ): CategoryModel {
        return new CategoryModel(
            name,
            sum,
            orderDirection,
            CategoryModelScope.SCOPED,
            {
                metadata: options?.metadata,
                minimumValue: options?.minimumValue,
                maximumValue: options?.maximumValue,
                entryPeriodEventId: options?.entryPeriodEventId,
                accessPeriodEventId: options?.accessPeriodEventId,
                calculateFixedTimingHour: options?.calculateFixedTimingHour,
                calculateFixedTimingMinute: options?.calculateFixedTimingMinute,
                additionalScopes: options?.additionalScopes,
                ignoreUserIds: options?.ignoreUserIds,
                generation: options?.generation,
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
        if (this.minimumValue != null) {
            properties["minimumValue"] = this.minimumValue;
        }
        if (this.maximumValue != null) {
            properties["maximumValue"] = this.maximumValue;
        }
        if (this.sum != null) {
            properties["sum"] = this.sum;
        }
        if (this.orderDirection != null) {
            properties["orderDirection"] = this.orderDirection;
        }
        if (this.scope != null) {
            properties["scope"] = this.scope;
        }
        if (this.globalRankingSetting != null) {
            properties["globalRankingSetting"] = this.globalRankingSetting?.properties(
            );
        }
        if (this.entryPeriodEventId != null) {
            properties["entryPeriodEventId"] = this.entryPeriodEventId;
        }
        if (this.accessPeriodEventId != null) {
            properties["accessPeriodEventId"] = this.accessPeriodEventId;
        }
        if (this.uniqueByUserId != null) {
            properties["uniqueByUserId"] = this.uniqueByUserId;
        }
        if (this.calculateFixedTimingHour != null) {
            properties["calculateFixedTimingHour"] = this.calculateFixedTimingHour;
        }
        if (this.calculateFixedTimingMinute != null) {
            properties["calculateFixedTimingMinute"] = this.calculateFixedTimingMinute;
        }
        if (this.calculateIntervalMinutes != null) {
            properties["calculateIntervalMinutes"] = this.calculateIntervalMinutes;
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
