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
const tslib_1 = require("tslib");
const core_1 = tslib_1.__importDefault(require("../../core"));
const func_1 = require("../../core/func");
const UserRef_1 = tslib_1.__importDefault(require("../ref/UserRef"));
const Identifier_1 = tslib_1.__importDefault(require("./Identifier"));
const AttachSecurityPolicy_1 = tslib_1.__importDefault(require("./AttachSecurityPolicy"));
class User extends core_1.default.CdkResource {
    constructor(stack, name) {
        super("Identifier_User_" + name);
        this.description = null;
        this.stack = stack;
        this.name = name;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Identifier::User";
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        return properties;
    }
    ref() {
        return new UserRef_1.default(this.name);
    }
    attach(securityPolicy) {
        new AttachSecurityPolicy_1.default(this.stack, this.name, securityPolicy.getAttrSecurityPolicyId().str()).addDependsOn(this).addDependsOn(securityPolicy);
        return this;
    }
    identifier() {
        let identifier = new Identifier_1.default(this.stack, this.name);
        identifier.addDependsOn(this);
        return identifier;
    }
    getAttrUserId() {
        return new func_1.GetAttr(null, null, "Item.UserId");
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map