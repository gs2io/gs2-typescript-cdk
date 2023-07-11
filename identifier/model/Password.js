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
const PasswordRef_1 = tslib_1.__importDefault(require("../ref/PasswordRef"));
class Password extends model_1.CdkResource {
    constructor(stack, userName, password, options = null) {
        super("Identifier_Password_");
        this.stack = stack;
        this.userName = userName;
        this.password = password;
        stack.addResource(this);
    }
    alternateKeys() {
        return "";
    }
    resourceType() {
        return "GS2::Identifier::Password";
    }
    properties() {
        let properties = {};
        if (this.userName != null) {
            properties["UserName"] = this.userName;
        }
        if (this.password != null) {
            properties["Password"] = this.password;
        }
        return properties;
    }
    ref() {
        return new PasswordRef_1.default(this.userName);
    }
    getAttrPasswordId() {
        return new func_1.GetAttr(null, null, "Item.PasswordId");
    }
}
exports.default = Password;
//# sourceMappingURL=Password.js.map