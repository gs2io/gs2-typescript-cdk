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
import { BuffTargetGrnOptions } from "./options/BuffTargetGrnOptions";

export default class BuffTargetGrn {
    private readonly targetModelName: string;
    private readonly targetGrn: string;

    public constructor(
        targetModelName: string,
        targetGrn: string,
        options: BuffTargetGrnOptions|null = null,
    ) {
        this.targetModelName = targetModelName;
        this.targetGrn = targetGrn;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.targetModelName != null) {
            properties["targetModelName"] = this.targetModelName;
        }
        if (this.targetGrn != null) {
            properties["targetGrn"] = this.targetGrn;
        }

        return properties;
    }
}
