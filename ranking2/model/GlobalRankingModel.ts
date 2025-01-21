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
import { AcquireAction } from "../../core/model";
import RankingReward from "./RankingReward";
import { GlobalRankingModelOptions } from "./options/GlobalRankingModelOptions";
import { GlobalRankingModelOrderDirection } from "./enum/GlobalRankingModelOrderDirection";
import { GlobalRankingModelRewardCalculationIndex } from "./enum/GlobalRankingModelRewardCalculationIndex";

export default class GlobalRankingModel {
    private readonly name: string;
    private readonly sum: boolean;
    private readonly orderDirection: GlobalRankingModelOrderDirection;
    private readonly rewardCalculationIndex: GlobalRankingModelRewardCalculationIndex;
    private readonly metadata: string|null = null;
    private readonly minimumValue: number|null = null;
    private readonly maximumValue: number|null = null;
    private readonly entryPeriodEventId: string|null = null;
    private readonly rankingRewards: RankingReward[]|null = null;
    private readonly accessPeriodEventId: string|null = null;

    public constructor(
        name: string,
        sum: boolean,
        orderDirection: GlobalRankingModelOrderDirection,
        rewardCalculationIndex: GlobalRankingModelRewardCalculationIndex,
        options: GlobalRankingModelOptions|null = null,
    ) {
        this.name = name;
        this.sum = sum;
        this.orderDirection = orderDirection;
        this.rewardCalculationIndex = rewardCalculationIndex;
        this.metadata = options?.metadata ?? null;
        this.minimumValue = options?.minimumValue ?? null;
        this.maximumValue = options?.maximumValue ?? null;
        this.entryPeriodEventId = options?.entryPeriodEventId ?? null;
        this.rankingRewards = options?.rankingRewards ?? null;
        this.accessPeriodEventId = options?.accessPeriodEventId ?? null;
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
        if (this.entryPeriodEventId != null) {
            properties["entryPeriodEventId"] = this.entryPeriodEventId;
        }
        if (this.rankingRewards != null) {
            properties["rankingRewards"] = this.rankingRewards.map(v => v.properties(
                ));
        }
        if (this.accessPeriodEventId != null) {
            properties["accessPeriodEventId"] = this.accessPeriodEventId;
        }
        if (this.rewardCalculationIndex != null) {
            properties["rewardCalculationIndex"] = this.rewardCalculationIndex;
        }

        return properties;
    }
}
