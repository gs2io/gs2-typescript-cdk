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
import { AcquireActionRateOptions } from "./options/AcquireActionRateOptions";
import { AcquireActionRateModeIsDoubleOptions } from "./options/AcquireActionRateModeIsDoubleOptions";
import { AcquireActionRateModeIsBigOptions } from "./options/AcquireActionRateModeIsBigOptions";
import { AcquireActionRateMode } from "./enum/AcquireActionRateMode";

export default class AcquireActionRate {
    private readonly name: string;
    private readonly mode: AcquireActionRateMode;
    private readonly rates: number[]|null = null;
    private readonly bigRates: string[]|null = null;

    public constructor(
        name: string,
        mode: AcquireActionRateMode,
        options: AcquireActionRateOptions|null = null,
    ) {
        this.name = name;
        this.mode = mode;
        this.rates = options?.rates ?? null;
        this.bigRates = options?.bigRates ?? null;
    }

    public static modeIsDouble(
        name: string,
        rates: number[],
        options: AcquireActionRateModeIsDoubleOptions|null = null,
    ): AcquireActionRate {
        return new AcquireActionRate(
            name,
            AcquireActionRateMode.DOUBLE,
            {
                rates: rates,
            },
        );
    }

    public static modeIsBig(
        name: string,
        bigRates: string[],
        options: AcquireActionRateModeIsBigOptions|null = null,
    ): AcquireActionRate {
        return new AcquireActionRate(
            name,
            AcquireActionRateMode.BIG,
            {
                bigRates: bigRates,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.mode != null) {
            properties["mode"] = this.mode;
        }
        if (this.rates != null) {
            properties["rates"] = this.rates;
        }
        if (this.bigRates != null) {
            properties["bigRates"] = this.bigRates;
        }

        return properties;
    }
}
