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
import { AcquireActionResultOptions } from "./options/AcquireActionResultOptions";

export default class AcquireActionResult {
    private readonly action: string;
    private readonly acquireRequest: string;
    private readonly statusCode: number|null = null;
    private readonly acquireResult: string|null = null;

    public constructor(
        action: string,
        acquireRequest: string,
        options: AcquireActionResultOptions|null = null,
    ) {
        this.action = action;
        this.acquireRequest = acquireRequest;
        this.statusCode = options?.statusCode ?? null;
        this.acquireResult = options?.acquireResult ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.action != null) {
            properties["action"] = this.action;
        }
        if (this.acquireRequest != null) {
            properties["acquireRequest"] = this.acquireRequest;
        }
        if (this.statusCode != null) {
            properties["statusCode"] = this.statusCode;
        }
        if (this.acquireResult != null) {
            properties["acquireResult"] = this.acquireResult;
        }

        return properties;
    }
}
