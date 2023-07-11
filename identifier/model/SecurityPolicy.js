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
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const model_1 = require("../../core/model");
const func_1 = require("../../core/func");
const SecurityPolicyRef_1 = tslib_1.__importDefault(require("../ref/SecurityPolicyRef"));
class SecurityPolicy extends model_1.CdkResource {
    constructor(stack, name, policy, options = null) {
        var _a;
        super("Identifier_SecurityPolicy_" + name);
        this.description = null;
        this.stack = stack;
        this.name = name;
        this.policy = policy;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Identifier::SecurityPolicy";
    }
    properties() {
        var _a;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.policy != null) {
            properties["Policy"] = (_a = this.policy) === null || _a === void 0 ? void 0 : _a.properties();
        }
        return properties;
    }
    ref() {
        return new SecurityPolicyRef_1.default(this.name);
    }
    static applicationAccessGrn() {
        return "grn:gs2::system:identifier:securityPolicy:ApplicationAccess";
    }
    getAttrSecurityPolicyId() {
        return new func_1.GetAttr(null, null, "Item.SecurityPolicyId");
    }
}
exports.default = SecurityPolicy;
//# sourceMappingURL=SecurityPolicy.js.map