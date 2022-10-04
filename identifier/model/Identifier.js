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
class Identifier extends core_1.default.CdkResource {
    constructor(stack, userName) {
        super("Identifier_Identifier_");
        this.stack = stack;
        this.userName = userName;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Identifier::Identifier";
    }
    properties() {
        let properties = {};
        if (this.userName != null) {
            properties["UserName"] = this.userName;
        }
        return properties;
    }
    getAttrClientId() {
        return new core_1.default.GetAttr(null, null, "Item.ClientId");
    }
    getAttrClientSecret() {
        return new core_1.default.GetAttr(null, null, "ClientSecret");
    }
}
exports.default = Identifier;
//# sourceMappingURL=Identifier.js.map