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
import TierModel from "./TierModel";
import { SeasonModelOptions } from "./options/SeasonModelOptions";

export default class SeasonModel {
    private readonly name: string;
    private readonly tiers: TierModel[];
    private readonly experienceModelId: string;
    private readonly metadata: string|null = null;
    private readonly challengePeriodEventId: string|null = null;

    public constructor(
        name: string,
        tiers: TierModel[],
        experienceModelId: string,
        options: SeasonModelOptions|null = null,
    ) {
        this.name = name;
        this.tiers = tiers;
        this.experienceModelId = experienceModelId;
        this.metadata = options?.metadata ?? null;
        this.challengePeriodEventId = options?.challengePeriodEventId ?? null;
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
        if (this.tiers != null) {
            properties["tiers"] = this.tiers.map(v => v.properties(
                ));
        }
        if (this.experienceModelId != null) {
            properties["experienceModelId"] = this.experienceModelId;
        }
        if (this.challengePeriodEventId != null) {
            properties["challengePeriodEventId"] = this.challengePeriodEventId;
        }

        return properties;
    }
}
