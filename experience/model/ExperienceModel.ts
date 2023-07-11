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
import Threshold from "./Threshold";
import { ExperienceModelOptions } from "./options/ExperienceModelOptions";

export default class ExperienceModel {
    private readonly name: string;
    private readonly defaultExperience: number;
    private readonly defaultRankCap: number;
    private readonly maxRankCap: number;
    private readonly rankThreshold: Threshold;
    private readonly metadata: string|null = null;

    public constructor(
        name: string,
        defaultExperience: number,
        defaultRankCap: number,
        maxRankCap: number,
        rankThreshold: Threshold,
        options: ExperienceModelOptions|null = null,
    ) {
        this.name = name;
        this.defaultExperience = defaultExperience;
        this.defaultRankCap = defaultRankCap;
        this.maxRankCap = maxRankCap;
        this.rankThreshold = rankThreshold;
        this.metadata = options?.metadata ?? null;
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
        if (this.defaultExperience != null) {
            properties["defaultExperience"] = this.defaultExperience;
        }
        if (this.defaultRankCap != null) {
            properties["defaultRankCap"] = this.defaultRankCap;
        }
        if (this.maxRankCap != null) {
            properties["maxRankCap"] = this.maxRankCap;
        }
        if (this.rankThreshold != null) {
            properties["rankThreshold"] = this.rankThreshold?.properties(
            );
        }

        return properties;
    }
}
