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
import { GitHubApiKeyOptions } from "./options/GitHubApiKeyOptions";

export default class GitHubApiKey {
    private readonly name: string;
    private readonly apiKey: string;
    private readonly encryptionKeyName: string;
    private readonly description: string|null = null;

    public constructor(
        name: string,
        apiKey: string,
        encryptionKeyName: string,
        options: GitHubApiKeyOptions|null = null,
    ) {
        this.name = name;
        this.apiKey = apiKey;
        this.encryptionKeyName = encryptionKeyName;
        this.description = options?.description ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.description != null) {
            properties["description"] = this.description;
        }
        if (this.apiKey != null) {
            properties["apiKey"] = this.apiKey;
        }
        if (this.encryptionKeyName != null) {
            properties["encryptionKeyName"] = this.encryptionKeyName;
        }

        return properties;
    }
}
