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
const StageRef_1 = tslib_1.__importDefault(require("../ref/StageRef"));
class Stage extends model_1.CdkResource {
    constructor(stack, ownerId, name, sortNumber, options = null) {
        var _a;
        super("Freeze_Stage_" + name);
        this.sourceStageName = null;
        this.stack = stack;
        this.ownerId = ownerId;
        this.name = name;
        this.sortNumber = sortNumber;
        this.sourceStageName = (_a = options === null || options === void 0 ? void 0 : options.sourceStageName) !== null && _a !== void 0 ? _a : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Freeze::Stage";
    }
    properties() {
        let properties = {};
        if (this.ownerId != null) {
            properties["OwnerId"] = this.ownerId;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.sourceStageName != null) {
            properties["SourceStageName"] = this.sourceStageName;
        }
        if (this.sortNumber != null) {
            properties["SortNumber"] = this.sortNumber;
        }
        return properties;
    }
    ref() {
        return new StageRef_1.default(this.name);
    }
    getAttrStageId() {
        return new func_1.GetAttr(this, "Item.StageId", null);
    }
}
exports.default = Stage;
//# sourceMappingURL=Stage.js.map