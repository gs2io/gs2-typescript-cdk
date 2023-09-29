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
const FormModelRef_1 = tslib_1.__importDefault(require("./FormModelRef"));
const AddMoldCapacityByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddMoldCapacityByUserId"));
const SetMoldCapacityByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetMoldCapacityByUserId"));
const AcquireActionsToFormProperties_1 = tslib_1.__importDefault(require("../stampSheet/AcquireActionsToFormProperties"));
const SubMoldCapacityByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SubMoldCapacityByUserId"));
class MoldModelRef {
    constructor(namespaceName, moldModelName) {
        this.namespaceName = namespaceName;
        this.moldModelName = moldModelName;
    }
    formModel() {
        return new FormModelRef_1.default(this.namespaceName, this.moldModelName);
    }
    addMoldCapacity(capacity, userId = "#{userId}") {
        return new AddMoldCapacityByUserId_1.default(this.namespaceName, this.moldModelName, capacity, userId);
    }
    setMoldCapacity(capacity, userId = "#{userId}") {
        return new SetMoldCapacityByUserId_1.default(this.namespaceName, this.moldModelName, capacity, userId);
    }
    acquireActionsToFormProperties(index, acquireAction, config = null, userId = "#{userId}") {
        return new AcquireActionsToFormProperties_1.default(this.namespaceName, this.moldModelName, index, acquireAction, config, userId);
    }
    subMoldCapacity(capacity, userId = "#{userId}") {
        return new SubMoldCapacityByUserId_1.default(this.namespaceName, this.moldModelName, capacity, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "formation",
            this.namespaceName,
            "model",
            "mold",
            this.moldModelName,
        ]).str();
    }
}
exports.default = MoldModelRef;
//# sourceMappingURL=MoldModelRef.js.map