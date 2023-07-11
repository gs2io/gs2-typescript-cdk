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
import { BonusRateOptions } from "./options/BonusRateOptions";

export default class BonusRate {
    private readonly rate: number;
    private readonly weight: number;

    public constructor(
        rate: number,
        weight: number,
        options: BonusRateOptions|null = null,
    ) {
        this.rate = rate;
        this.weight = weight;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.rate != null) {
            properties["rate"] = this.rate;
        }
        if (this.weight != null) {
            properties["weight"] = this.weight;
        }

        return properties;
    }
}
