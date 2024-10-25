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
 *
 * deny overwrite
 */

import core from "../../core";
import {GetAttr} from "../../core/func";
import {CdkResource, Stack} from "../../core/model";

export interface AttachGuardOptions {
}

export default class AttachGuard extends CdkResource {

    private stack: Stack;
    private userName: string;
    private clientId: string;
    private guardNamespaceId: string;

    public constructor(
        stack: Stack,
        userName: string,
        clientId: string,
        guardNamespaceId: string,
        options: AttachGuardOptions|null = null,
    ) {
        super("Identifier_AttachGuard_" + userName);
        this.stack = stack;
        this.userName = userName;
        this.clientId = clientId;
        this.guardNamespaceId = guardNamespaceId;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Identifier::AttachGuard";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.userName != null) {
            properties["UserName"] = this.userName;
        }
        if (this.clientId != null) {
            properties["ClientId"] = this.clientId;
        }
        if (this.guardNamespaceId != null) {
            properties["SecurityPolicyId"] = this.guardNamespaceId;
        }
        return properties;
    }
}
