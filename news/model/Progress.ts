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
import { ProgressOptions } from "./options/ProgressOptions";

export default class Progress {
    private readonly uploadToken: string;
    private readonly generated: number;
    private readonly patternCount: number;
    private readonly createdAt: number;
    private readonly updatedAt: number;

    public constructor(
        uploadToken: string,
        generated: number,
        patternCount: number,
        createdAt: number,
        updatedAt: number,
        options: ProgressOptions|null = null,
    ) {
        this.uploadToken = uploadToken;
        this.generated = generated;
        this.patternCount = patternCount;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.uploadToken != null) {
            properties["uploadToken"] = this.uploadToken;
        }
        if (this.generated != null) {
            properties["generated"] = this.generated;
        }
        if (this.patternCount != null) {
            properties["patternCount"] = this.patternCount;
        }
        if (this.createdAt != null) {
            properties["createdAt"] = this.createdAt;
        }
        if (this.updatedAt != null) {
            properties["updatedAt"] = this.updatedAt;
        }

        return properties;
    }
}
