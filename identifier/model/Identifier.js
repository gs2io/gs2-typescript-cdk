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
const tslib_1 = require("tslib");
const model_1 = require("../../core/model");
const func_1 = require("../../core/func");
const IdentifierRef_1 = tslib_1.__importDefault(require("../ref/IdentifierRef"));
const AttachSecurityPolicy_1 = tslib_1.__importDefault(require("./AttachSecurityPolicy"));
class Identifier extends model_1.CdkResource {
    constructor(stack, userName, options = null) {
        super("Identifier_Identifier_" + userName);
        this.stack = stack;
        this.userName = userName;
        stack.addResource(this);
    }
    alternateKeys() {
        return "userName";
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
    ref(clientId) {
        return new IdentifierRef_1.default(this.userName, clientId);
    }
    attach(guardNamespace) {
        new AttachSecurityPolicy_1.default(this.stack, this.userName, this.getAttrClientId().str(), guardNamespace.getAttrNamespaceId().str()).addDependsOn(this).addDependsOn(guardNamespace);
        return this;
    }
    attachGrn(guardNamespaceGrn) {
        new AttachSecurityPolicy_1.default(this.stack, this.userName, this.getAttrClientId().str(), guardNamespaceGrn).addDependsOn(this);
        return this;
    }
    getAttrClientId() {
        return new func_1.GetAttr(this, "Item.ClientId", null);
    }
    getAttrClientSecret() {
        return new func_1.GetAttr(this, "ClientSecret", null);
    }
}
exports.default = Identifier;
//# sourceMappingURL=Identifier.js.map