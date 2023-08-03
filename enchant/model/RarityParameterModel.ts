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
import RarityParameterCountModel from "./RarityParameterCountModel";
import RarityParameterValueModel from "./RarityParameterValueModel";
import { RarityParameterModelOptions } from "./options/RarityParameterModelOptions";

export default class RarityParameterModel {
    private readonly name: string;
    private readonly maximumParameterCount: number;
    private readonly parameterCounts: RarityParameterCountModel[];
    private readonly parameters: RarityParameterValueModel[];
    private readonly metadata: string|null = null;

    public constructor(
        name: string,
        maximumParameterCount: number,
        parameterCounts: RarityParameterCountModel[],
        parameters: RarityParameterValueModel[],
        options: RarityParameterModelOptions|null = null,
    ) {
        this.name = name;
        this.maximumParameterCount = maximumParameterCount;
        this.parameterCounts = parameterCounts;
        this.parameters = parameters;
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
        if (this.maximumParameterCount != null) {
            properties["maximumParameterCount"] = this.maximumParameterCount;
        }
        if (this.parameterCounts != null) {
            properties["parameterCounts"] = this.parameterCounts.map(v => v.properties(
                ));
        }
        if (this.parameters != null) {
            properties["parameters"] = this.parameters.map(v => v.properties(
                ));
        }

        return properties;
    }
}