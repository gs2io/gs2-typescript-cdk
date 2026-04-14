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
const FacetModelRef_1 = tslib_1.__importDefault(require("../ref/FacetModelRef"));
class FacetModel extends model_1.CdkResource {
    constructor(stack, namespaceName, field, type, displayName, options = null) {
        var _a;
        super("Log_FacetModel_" + field);
        this.order = null;
        this.stack = stack;
        this.namespaceName = namespaceName;
        this.field = field;
        this.type = type;
        this.displayName = displayName;
        this.order = (_a = options === null || options === void 0 ? void 0 : options.order) !== null && _a !== void 0 ? _a : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "field";
    }
    resourceType() {
        return "GS2::Log::FacetModel";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.field != null) {
            properties["Field"] = this.field;
        }
        if (this.type != null) {
            properties["Type"] = this.type;
        }
        if (this.displayName != null) {
            properties["DisplayName"] = this.displayName;
        }
        if (this.order != null) {
            properties["Order"] = this.order;
        }
        return properties;
    }
    ref() {
        return new FacetModelRef_1.default(this.namespaceName, this.field);
    }
    getAttrFacetModelId() {
        return new func_1.GetAttr(this, "Item.FacetModelId", null);
    }
}
exports.default = FacetModel;
//# sourceMappingURL=FacetModel.js.map