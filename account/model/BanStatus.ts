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
import { BanStatusOptions } from "./options/BanStatusOptions";

export default class BanStatus {
    private readonly reason: string;
    private readonly releaseTimestamp: number;

    public constructor(
        reason: string,
        releaseTimestamp: number,
        options: BanStatusOptions|null = null,
    ) {
        this.reason = reason;
        this.releaseTimestamp = releaseTimestamp;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.reason != null) {
            properties["reason"] = this.reason;
        }
        if (this.releaseTimestamp != null) {
            properties["releaseTimestamp"] = this.releaseTimestamp;
        }

        return properties;
    }
}
