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
import VersionModel from "./VersionModel";
import { StatusOptions } from "./options/StatusOptions";

export default class Status {
    private readonly versionModel: VersionModel;
    private readonly currentVersion: Version|null = null;

    public constructor(
        versionModel: VersionModel,
        options: StatusOptions|null = null,
    ) {
        this.versionModel = versionModel;
        this.currentVersion = options?.currentVersion ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.versionModel != null) {
            properties["versionModel"] = this.versionModel?.properties(
            );
        }
        if (this.currentVersion != null) {
            properties["currentVersion"] = this.currentVersion?.properties(
            );
        }

        return properties;
    }
}
