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
import { IssuedCodeSettingOptions } from "./options/IssuedCodeSettingOptions";

export default class IssuedCodeSetting {
    private readonly expiresDays: number;
    private readonly deleteOnUse: boolean;
    private readonly maxFailedAttempts: number|null = null;

    public constructor(
        expiresDays: number,
        deleteOnUse: boolean,
        options: IssuedCodeSettingOptions|null = null,
    ) {
        this.expiresDays = expiresDays;
        this.deleteOnUse = deleteOnUse;
        this.maxFailedAttempts = options?.maxFailedAttempts ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.expiresDays != null) {
            properties["expiresDays"] = this.expiresDays;
        }
        if (this.maxFailedAttempts != null) {
            properties["maxFailedAttempts"] = this.maxFailedAttempts;
        }
        if (this.deleteOnUse != null) {
            properties["deleteOnUse"] = this.deleteOnUse;
        }

        return properties;
    }
}
