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
import { LogCostOptions } from "./options/LogCostOptions";

export default class LogCost {
    private readonly base: number;
    private readonly adds: number[];
    private readonly subs: number[]|null = null;

    public constructor(
        base: number,
        adds: number[],
        options: LogCostOptions|null = null,
    ) {
        this.base = base;
        this.adds = adds;
        this.subs = options?.subs ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.base != null) {
            properties["base"] = this.base;
        }
        if (this.adds != null) {
            properties["adds"] = this.adds;
        }
        if (this.subs != null) {
            properties["subs"] = this.subs;
        }

        return properties;
    }
}
