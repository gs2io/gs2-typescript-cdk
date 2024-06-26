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
const func_1 = require("../../core/func");
const CategoryModelRef_1 = tslib_1.__importDefault(require("./CategoryModelRef"));
const IncreaseMaximumIdleMinutesByUserId_1 = tslib_1.__importDefault(require("../stampSheet/IncreaseMaximumIdleMinutesByUserId"));
const SetMaximumIdleMinutesByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetMaximumIdleMinutesByUserId"));
const ReceiveByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ReceiveByUserId"));
const DecreaseMaximumIdleMinutesByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DecreaseMaximumIdleMinutesByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    categoryModel(categoryName) {
        return new CategoryModelRef_1.default(this.namespaceName, categoryName);
    }
    increaseMaximumIdleMinutes(categoryName, increaseMinutes = null, userId = "#{userId}") {
        return new IncreaseMaximumIdleMinutesByUserId_1.default(this.namespaceName, categoryName, increaseMinutes, userId);
    }
    setMaximumIdleMinutes(categoryName, maximumIdleMinutes = null, userId = "#{userId}") {
        return new SetMaximumIdleMinutesByUserId_1.default(this.namespaceName, categoryName, maximumIdleMinutes, userId);
    }
    receive(categoryName, config = null, userId = "#{userId}") {
        return new ReceiveByUserId_1.default(this.namespaceName, categoryName, config, userId);
    }
    decreaseMaximumIdleMinutes(categoryName, decreaseMinutes = null, userId = "#{userId}") {
        return new DecreaseMaximumIdleMinutesByUserId_1.default(this.namespaceName, categoryName, decreaseMinutes, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "idle",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map