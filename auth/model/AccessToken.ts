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
import { AccessTokenOptions } from "./options/AccessTokenOptions";

export default class AccessToken {
    private readonly ownerId: string;
    private readonly userId: string;
    private readonly realUserId: string;
    private readonly expire: number;
    private readonly timeOffset: number;
    private readonly federationFromUserId: string|null = null;
    private readonly federationPolicyDocument: string|null = null;

    public constructor(
        ownerId: string,
        userId: string,
        realUserId: string,
        expire: number,
        timeOffset: number,
        options: AccessTokenOptions|null = null,
    ) {
        this.ownerId = ownerId;
        this.userId = userId;
        this.realUserId = realUserId;
        this.expire = expire;
        this.timeOffset = timeOffset;
        this.federationFromUserId = options?.federationFromUserId ?? null;
        this.federationPolicyDocument = options?.federationPolicyDocument ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.ownerId != null) {
            properties["ownerId"] = this.ownerId;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.realUserId != null) {
            properties["realUserId"] = this.realUserId;
        }
        if (this.federationFromUserId != null) {
            properties["federationFromUserId"] = this.federationFromUserId;
        }
        if (this.federationPolicyDocument != null) {
            properties["federationPolicyDocument"] = this.federationPolicyDocument;
        }
        if (this.expire != null) {
            properties["expire"] = this.expire;
        }
        if (this.timeOffset != null) {
            properties["timeOffset"] = this.timeOffset;
        }

        return properties;
    }
}
