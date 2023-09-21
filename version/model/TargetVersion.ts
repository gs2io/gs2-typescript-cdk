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
import Version from "./Version";
import { TargetVersionOptions } from "./options/TargetVersionOptions";

export default class TargetVersion {
    private readonly versionName: string;
    private readonly body: string|null = null;
    private readonly signature: string|null = null;
    private readonly version: Version|null = null;

    public constructor(
        versionName: string,
        options: TargetVersionOptions|null = null,
    ) {
        this.versionName = versionName;
        this.body = options?.body ?? null;
        this.signature = options?.signature ?? null;
        this.version = options?.version ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.versionName != null) {
            properties["versionName"] = this.versionName;
        }
        if (this.body != null) {
            properties["body"] = this.body;
        }
        if (this.signature != null) {
            properties["signature"] = this.signature;
        }
        if (this.version != null) {
            properties["version"] = this.version?.properties(
            );
        }

        return properties;
    }
}
