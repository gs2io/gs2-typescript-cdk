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
exports.InsightStatus = void 0;
const tslib_1 = require("tslib");
const core_1 = tslib_1.__importDefault(require("../../core"));
const func_1 = require("../../core/func");
exports.InsightStatus = {
    ALLOCATING: "ALLOCATING",
    LAUNCHING: "LAUNCHING",
    ACTIVE: "ACTIVE",
    DELETED: "DELETED",
};
const InsightRef_1 = tslib_1.__importDefault(require("../ref/InsightRef"));
class Insight extends core_1.default.CdkResource {
    constructor(stack, namespaceName) {
        super("Log_Insight_" + name);
        this.stack = stack;
        this.namespaceName = namespaceName;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Log::Insight";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        return properties;
    }
    ref(namespaceName) {
        return new InsightRef_1.default(namespaceName, '');
    }
    getAttrInsightId() {
        return new func_1.GetAttr(null, null, "Item.InsightId");
    }
}
exports.default = Insight;
//# sourceMappingURL=Insight.js.map