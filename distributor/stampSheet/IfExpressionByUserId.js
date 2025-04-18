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
const model_1 = require("../../core/model");
class IfExpressionByUserId extends model_1.VerifyAction {
    constructor(namespaceName, condition, trueActions = null, falseActions = null, multiplyValueSpecifyingQuantity = null, timeOffsetToken = null, userId = "#{userId}") {
        super();
        this.trueActions = null;
        this.falseActions = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.timeOffsetToken = null;
        this.namespaceName = namespaceName;
        this.condition = condition;
        this.trueActions = trueActions !== null && trueActions !== void 0 ? trueActions : null;
        this.falseActions = falseActions !== null && falseActions !== void 0 ? falseActions : null;
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity !== null && multiplyValueSpecifyingQuantity !== void 0 ? multiplyValueSpecifyingQuantity : null;
        this.timeOffsetToken = timeOffsetToken !== null && timeOffsetToken !== void 0 ? timeOffsetToken : null;
        this.userId = userId;
    }
    request() {
        var _a;
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.condition != null) {
            properties["condition"] = (_a = this.condition) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.trueActions != null) {
            properties["trueActions"] = this.trueActions.map(v => v.properties());
        }
        if (this.falseActions != null) {
            properties["falseActions"] = this.falseActions.map(v => v.properties());
        }
        if (this.multiplyValueSpecifyingQuantity != null) {
            properties["multiplyValueSpecifyingQuantity"] = this.multiplyValueSpecifyingQuantity;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }
        return properties;
    }
    action() {
        return "Gs2Distributor:IfExpressionByUserId";
    }
}
exports.default = IfExpressionByUserId;
//# sourceMappingURL=IfExpressionByUserId.js.map