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
import { FixedTimingOptions } from "./options/FixedTimingOptions";

export default class FixedTiming {
    private readonly hour: number|null = null;
    private readonly minute: number|null = null;

    public constructor(
        options: FixedTimingOptions|null = null,
    ) {
        this.hour = options?.hour ?? null;
        this.minute = options?.minute ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.hour != null) {
            properties["hour"] = this.hour;
        }
        if (this.minute != null) {
            properties["minute"] = this.minute;
        }

        return properties;
    }
}
