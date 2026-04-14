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
import { NumericRangeOptions } from "./options/NumericRangeOptions";

export default class NumericRange {
    private readonly min: number;
    private readonly max: number;

    public constructor(
        min: number,
        max: number,
        options: NumericRangeOptions|null = null,
    ) {
        this.min = min;
        this.max = max;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.min != null) {
            properties["min"] = this.min;
        }
        if (this.max != null) {
            properties["max"] = this.max;
        }

        return properties;
    }
}
