"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../core/model");
class AttachGuard extends model_1.CdkResource {
    constructor(stack, userName, clientId, guardNamespaceId, options = null) {
        super("Identifier_AttachGuard_" + userName);
        this.stack = stack;
        this.userName = userName;
        this.clientId = clientId;
        this.guardNamespaceId = guardNamespaceId;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Identifier::AttachGuard";
    }
    properties() {
        let properties = {};
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
exports.default = AttachGuard;
//# sourceMappingURL=AttachGuard.js.map