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
import { RarityParameterValueModelOptions } from "./options/RarityParameterValueModelOptions";

export default class RarityParameterValueModel {
    private readonly name: string;
    private readonly resourceName: string;
    private readonly resourceValue: number;
    private readonly weight: number;
    private readonly metadata: string|null = null;

    public constructor(
        name: string,
        resourceName: string,
        resourceValue: number,
        weight: number,
        options: RarityParameterValueModelOptions|null = null,
    ) {
        this.name = name;
        this.resourceName = resourceName;
        this.resourceValue = resourceValue;
        this.weight = weight;
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
        if (this.resourceName != null) {
            properties["resourceName"] = this.resourceName;
        }
        if (this.resourceValue != null) {
            properties["resourceValue"] = this.resourceValue;
        }
        if (this.weight != null) {
            properties["weight"] = this.weight;
        }

        return properties;
    }
}
