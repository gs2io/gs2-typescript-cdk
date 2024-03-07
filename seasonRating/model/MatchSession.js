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
const MatchSessionRef_1 = tslib_1.__importDefault(require("../ref/MatchSessionRef"));
class MatchSession extends model_1.CdkResource {
    constructor(stack, namespaceName, options = null) {
        var _a, _b;
        super("SeasonRating_MatchSession_" + name);
        this.sessionName = null;
        this.ttlSeconds = null;
        this.stack = stack;
        this.namespaceName = namespaceName;
        this.sessionName = (_a = options === null || options === void 0 ? void 0 : options.sessionName) !== null && _a !== void 0 ? _a : null;
        this.ttlSeconds = (_b = options === null || options === void 0 ? void 0 : options.ttlSeconds) !== null && _b !== void 0 ? _b : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::SeasonRating::MatchSession";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.sessionName != null) {
            properties["SessionName"] = this.sessionName;
        }
        if (this.ttlSeconds != null) {
            properties["TtlSeconds"] = this.ttlSeconds;
        }
        return properties;
    }
    ref(name) {
        return new MatchSessionRef_1.default(this.namespaceName, name);
    }
    getAttrSessionId() {
        return new func_1.GetAttr(this, "Item.SessionId", null);
    }
}
exports.default = MatchSession;
//# sourceMappingURL=MatchSession.js.map