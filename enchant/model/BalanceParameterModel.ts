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
import BalanceParameterValueModel from "./BalanceParameterValueModel";
import { BalanceParameterModelOptions } from "./options/BalanceParameterModelOptions";
import { BalanceParameterModelInitialValueStrategy } from "./enum/BalanceParameterModelInitialValueStrategy";

export default class BalanceParameterModel {
    private readonly name: string;
    private readonly totalValue: number;
    private readonly initialValueStrategy: BalanceParameterModelInitialValueStrategy;
    private readonly parameters: BalanceParameterValueModel[];
    private readonly metadata: string|null = null;

    public constructor(
        name: string,
        totalValue: number,
        initialValueStrategy: BalanceParameterModelInitialValueStrategy,
        parameters: BalanceParameterValueModel[],
        options: BalanceParameterModelOptions|null = null,
    ) {
        this.name = name;
        this.totalValue = totalValue;
        this.initialValueStrategy = initialValueStrategy;
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
        if (this.totalValue != null) {
            properties["totalValue"] = this.totalValue;
        }
        if (this.initialValueStrategy != null) {
            properties["initialValueStrategy"] = this.initialValueStrategy;
        }
        if (this.parameters != null) {
            properties["parameters"] = this.parameters.map(v => v.properties(
                ));
        }

        return properties;
    }
}
