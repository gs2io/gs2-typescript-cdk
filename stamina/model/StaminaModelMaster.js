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
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = tslib_1.__importDefault(require("../../core"));
const func_1 = require("../../core/func");
const StaminaModelMasterRef_1 = tslib_1.__importDefault(require("../ref/StaminaModelMasterRef"));
class StaminaModelMaster extends core_1.default.CdkResource {
    constructor(stack, namespaceName, name, recoverIntervalMinutes, recoverValue, initialCapacity, isOverflow, options) {
        var _a, _b, _c, _d, _e, _f;
        super("Stamina_StaminaModelMaster_" + name);
        this.description = null;
        this.metadata = null;
        this.maxCapacity = null;
        this.maxStaminaTableName = null;
        this.recoverIntervalTableName = null;
        this.recoverValueTableName = null;
        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.metadata = (_b = options === null || options === void 0 ? void 0 : options.metadata) !== null && _b !== void 0 ? _b : null;
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        this.recoverValue = recoverValue;
        this.initialCapacity = initialCapacity;
        this.isOverflow = isOverflow;
        this.maxCapacity = (_c = options === null || options === void 0 ? void 0 : options.maxCapacity) !== null && _c !== void 0 ? _c : null;
        this.maxStaminaTableName = (_d = options === null || options === void 0 ? void 0 : options.maxStaminaTableName) !== null && _d !== void 0 ? _d : null;
        this.recoverIntervalTableName = (_e = options === null || options === void 0 ? void 0 : options.recoverIntervalTableName) !== null && _e !== void 0 ? _e : null;
        this.recoverValueTableName = (_f = options === null || options === void 0 ? void 0 : options.recoverValueTableName) !== null && _f !== void 0 ? _f : null;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Stamina::StaminaModelMaster";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.recoverIntervalMinutes != null) {
            properties["RecoverIntervalMinutes"] = this.recoverIntervalMinutes;
        }
        if (this.recoverValue != null) {
            properties["RecoverValue"] = this.recoverValue;
        }
        if (this.initialCapacity != null) {
            properties["InitialCapacity"] = this.initialCapacity;
        }
        if (this.isOverflow != null) {
            properties["IsOverflow"] = this.isOverflow;
        }
        if (this.maxCapacity != null) {
            properties["MaxCapacity"] = this.maxCapacity;
        }
        if (this.maxStaminaTableName != null) {
            properties["MaxStaminaTableName"] = this.maxStaminaTableName;
        }
        if (this.recoverIntervalTableName != null) {
            properties["RecoverIntervalTableName"] = this.recoverIntervalTableName;
        }
        if (this.recoverValueTableName != null) {
            properties["RecoverValueTableName"] = this.recoverValueTableName;
        }
        return properties;
    }
    ref(namespaceName) {
        return new StaminaModelMasterRef_1.default(namespaceName, this.name);
    }
    getAttrStaminaModelId() {
        return new func_1.GetAttr(null, null, "Item.StaminaModelId");
    }
}
exports.default = StaminaModelMaster;
//# sourceMappingURL=StaminaModelMaster.js.map