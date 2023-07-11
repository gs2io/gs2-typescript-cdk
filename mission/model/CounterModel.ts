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
import CounterScopeModel from "./CounterScopeModel";
import { CounterModelOptions } from "./options/CounterModelOptions";

export default class CounterModel {
    private readonly name: string;
    private readonly scopes: CounterScopeModel[];
    private readonly metadata: string|null = null;
    private readonly challengePeriodEventId: string|null = null;

    public constructor(
        name: string,
        scopes: CounterScopeModel[],
        options: CounterModelOptions|null = null,
    ) {
        this.name = name;
        this.scopes = scopes;
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
        if (this.scopes != null) {
            properties["scopes"] = this.scopes.map(v => v.properties(
                ));
        }
        if (this.challengePeriodEventId != null) {
            properties["challengePeriodEventId"] = this.challengePeriodEventId;
        }

        return properties;
    }
}
