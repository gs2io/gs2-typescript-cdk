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
import { PrizeLimitOptions } from "./options/PrizeLimitOptions";

export default class PrizeLimit {
    private readonly prizeId: string;
    private readonly drawnCount: number;

    public constructor(
        prizeId: string,
        drawnCount: number,
        options: PrizeLimitOptions|null = null,
    ) {
        this.prizeId = prizeId;
        this.drawnCount = drawnCount;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.prizeId != null) {
            properties["prizeId"] = this.prizeId;
        }
        if (this.drawnCount != null) {
            properties["drawnCount"] = this.drawnCount;
        }

        return properties;
    }
}
