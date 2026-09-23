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
import { UserDataEntryOptions } from "./options/UserDataEntryOptions";

export default class UserDataEntry {
    private readonly service: string;
    private readonly namespaceName: string;
    private readonly kind: string;
    private readonly payload: string;

    public constructor(
        service: string,
        namespaceName: string,
        kind: string,
        payload: string,
        options: UserDataEntryOptions|null = null,
    ) {
        this.service = service;
        this.namespaceName = namespaceName;
        this.kind = kind;
        this.payload = payload;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.service != null) {
            properties["service"] = this.service;
        }
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.kind != null) {
            properties["kind"] = this.kind;
        }
        if (this.payload != null) {
            properties["payload"] = this.payload;
        }

        return properties;
    }
}
