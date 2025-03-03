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
import { GooglePlaySettingOptions } from "./options/GooglePlaySettingOptions";

export default class GooglePlaySetting {
    private readonly packageName: string|null = null;
    private readonly publicKey: string|null = null;
    private readonly credentialsJSON: string|null = null;

    public constructor(
        options: GooglePlaySettingOptions|null = null,
    ) {
        this.packageName = options?.packageName ?? null;
        this.publicKey = options?.publicKey ?? null;
        this.credentialsJSON = options?.credentialsJSON ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.packageName != null) {
            properties["packageName"] = this.packageName;
        }
        if (this.publicKey != null) {
            properties["publicKey"] = this.publicKey;
        }
        if (this.credentialsJSON != null) {
            properties["credentialsJSON"] = this.credentialsJSON;
        }

        return properties;
    }
}
