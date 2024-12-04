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
import { VerifyActionResultOptions } from "./options/VerifyActionResultOptions";

export default class VerifyActionResult {
    private readonly action: string;
    private readonly verifyRequest: string;
    private readonly statusCode: number|null = null;
    private readonly verifyResult: string|null = null;

    public constructor(
        action: string,
        verifyRequest: string,
        options: VerifyActionResultOptions|null = null,
    ) {
        this.action = action;
        this.verifyRequest = verifyRequest;
        this.statusCode = options?.statusCode ?? null;
        this.verifyResult = options?.verifyResult ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.action != null) {
            properties["action"] = this.action;
        }
        if (this.verifyRequest != null) {
            properties["verifyRequest"] = this.verifyRequest;
        }
        if (this.statusCode != null) {
            properties["statusCode"] = this.statusCode;
        }
        if (this.verifyResult != null) {
            properties["verifyResult"] = this.verifyResult;
        }

        return properties;
    }
}
