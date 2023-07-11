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
import { ThresholdOptions } from "./options/ThresholdOptions";

export default class Threshold {
    private readonly values: number[];
    private readonly metadata: string|null = null;

    public constructor(
        values: number[],
        options: ThresholdOptions|null = null,
    ) {
        this.values = values;
        this.metadata = options?.metadata ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.values != null) {
            properties["values"] = this.values;
        }

        return properties;
    }
}
