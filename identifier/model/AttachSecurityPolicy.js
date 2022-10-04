"use strict";
/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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
class AttachSecurityPolicy extends model_1.CdkResource {
    constructor(stack, userName, securityPolicyId) {
        super("Identifier_AttachSecurityPolicy_" + userName);
        this.stack = stack;
        this.userName = userName;
        this.securityPolicyId = securityPolicyId;
    }
    resourceType() {
        return "GS2::Identifier::AttachSecurityPolicy";
    }
    properties() {
        let properties = {};
        if (this.userName != null) {
            properties.put("UserName", this.userName);
        }
        if (this.securityPolicyId != null) {
            properties.put("SecurityPolicyId", this.securityPolicyId);
        }
        return properties;
    }
}
exports.default = AttachSecurityPolicy;
//# sourceMappingURL=AttachSecurityPolicy.js.map