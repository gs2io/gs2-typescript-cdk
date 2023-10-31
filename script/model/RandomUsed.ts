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
import { RandomUsedOptions } from "./options/RandomUsedOptions";

export default class RandomUsed {
    private readonly category: number;
    private readonly used: number;

    public constructor(
        category: number,
        used: number,
        options: RandomUsedOptions|null = null,
    ) {
        this.category = category;
        this.used = used;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.category != null) {
            properties["category"] = this.category;
        }
        if (this.used != null) {
            properties["used"] = this.used;
        }

        return properties;
    }
}
