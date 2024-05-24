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
const GradeModelRef_1 = tslib_1.__importDefault(require("./GradeModelRef"));
const AddGradeByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddGradeByUserId"));
const ApplyRankCapByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ApplyRankCapByUserId"));
const MultiplyAcquireActionsByUserId_1 = tslib_1.__importDefault(require("../stampSheet/MultiplyAcquireActionsByUserId"));
const SubGradeByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SubGradeByUserId"));
const VerifyGradeByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyGradeByUserId"));
const VerifyGradeUpMaterialByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyGradeUpMaterialByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    gradeModel(gradeName) {
        return new GradeModelRef_1.default(this.namespaceName, gradeName);
    }
    addGrade(gradeName, propertyId, gradeValue = null, userId = "#{userId}") {
        return new AddGradeByUserId_1.default(this.namespaceName, gradeName, propertyId, gradeValue, userId);
    }
    applyRankCap(gradeName, propertyId, userId = "#{userId}") {
        return new ApplyRankCapByUserId_1.default(this.namespaceName, gradeName, propertyId, userId);
    }
    multiplyAcquireActions(gradeName, propertyId, rateName, acquireActions = null, userId = "#{userId}") {
        return new MultiplyAcquireActionsByUserId_1.default(this.namespaceName, gradeName, propertyId, rateName, acquireActions, userId);
    }
    subGrade(gradeName, propertyId, gradeValue = null, userId = "#{userId}") {
        return new SubGradeByUserId_1.default(this.namespaceName, gradeName, propertyId, gradeValue, userId);
    }
    verifyGrade(gradeName, verifyType, propertyId, gradeValue = null, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyGradeByUserId_1.default(this.namespaceName, gradeName, verifyType, propertyId, gradeValue, multiplyValueSpecifyingQuantity, userId);
    }
    verifyGradeUpMaterial(gradeName, verifyType, propertyId, materialPropertyId, userId = "#{userId}") {
        return new VerifyGradeUpMaterialByUserId_1.default(this.namespaceName, gradeName, verifyType, propertyId, materialPropertyId, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "grade",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map