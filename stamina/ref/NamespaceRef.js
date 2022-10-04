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
const func_1 = require("../../core/func");
const CurrentStaminaMasterRef_1 = tslib_1.__importDefault(require("./CurrentStaminaMasterRef"));
const MaxStaminaTableRef_1 = tslib_1.__importDefault(require("./MaxStaminaTableRef"));
const RecoverIntervalTableRef_1 = tslib_1.__importDefault(require("./RecoverIntervalTableRef"));
const RecoverValueTableRef_1 = tslib_1.__importDefault(require("./RecoverValueTableRef"));
const StaminaModelRef_1 = tslib_1.__importDefault(require("./StaminaModelRef"));
const RecoverIntervalTableMasterRef_1 = tslib_1.__importDefault(require("./RecoverIntervalTableMasterRef"));
const MaxStaminaTableMasterRef_1 = tslib_1.__importDefault(require("./MaxStaminaTableMasterRef"));
const RecoverValueTableMasterRef_1 = tslib_1.__importDefault(require("./RecoverValueTableMasterRef"));
const StaminaModelMasterRef_1 = tslib_1.__importDefault(require("./StaminaModelMasterRef"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    currentStaminaMaster() {
        return new CurrentStaminaMasterRef_1.default(this.namespaceName);
    }
    maxStaminaTable(maxStaminaTableName) {
        return new MaxStaminaTableRef_1.default(this.namespaceName, maxStaminaTableName);
    }
    recoverIntervalTable(recoverIntervalTableName) {
        return new RecoverIntervalTableRef_1.default(this.namespaceName, recoverIntervalTableName);
    }
    recoverValueTable(recoverValueTableName) {
        return new RecoverValueTableRef_1.default(this.namespaceName, recoverValueTableName);
    }
    staminaModel(staminaName) {
        return new StaminaModelRef_1.default(this.namespaceName, staminaName);
    }
    recoverIntervalTableMaster(recoverIntervalTableName) {
        return new RecoverIntervalTableMasterRef_1.default(this.namespaceName, recoverIntervalTableName);
    }
    maxStaminaTableMaster(maxStaminaTableName) {
        return new MaxStaminaTableMasterRef_1.default(this.namespaceName, maxStaminaTableName);
    }
    recoverValueTableMaster(recoverValueTableName) {
        return new RecoverValueTableMasterRef_1.default(this.namespaceName, recoverValueTableName);
    }
    staminaModelMaster(staminaName) {
        return new StaminaModelMasterRef_1.default(this.namespaceName, staminaName);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "stamina",
            this.namespaceName
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map