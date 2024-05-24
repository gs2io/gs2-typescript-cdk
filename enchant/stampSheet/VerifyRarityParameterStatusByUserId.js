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
class VerifyRarityParameterStatusByUserId extends model_1.ConsumeAction {
    constructor(namespaceName, parameterName, propertyId, verifyType, parameterValueName = null, parameterCount = null, multiplyValueSpecifyingQuantity = null, timeOffsetToken = null, userId = "#{userId}") {
        super();
        this.parameterValueName = null;
        this.parameterCount = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.timeOffsetToken = null;
        this.namespaceName = namespaceName;
        this.parameterName = parameterName;
        this.propertyId = propertyId;
        this.verifyType = verifyType;
        this.parameterValueName = parameterValueName !== null && parameterValueName !== void 0 ? parameterValueName : null;
        this.parameterCount = parameterCount !== null && parameterCount !== void 0 ? parameterCount : null;
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity !== null && multiplyValueSpecifyingQuantity !== void 0 ? multiplyValueSpecifyingQuantity : null;
        this.timeOffsetToken = timeOffsetToken !== null && timeOffsetToken !== void 0 ? timeOffsetToken : null;
        this.userId = userId;
    }
    request() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.parameterName != null) {
            properties["parameterName"] = this.parameterName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.propertyId != null) {
            properties["propertyId"] = this.propertyId;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.parameterValueName != null) {
            properties["parameterValueName"] = this.parameterValueName;
        }
        if (this.parameterCount != null) {
            properties["parameterCount"] = this.parameterCount;
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
        return "Gs2Enchant:VerifyRarityParameterStatusByUserId";
    }
}
exports.default = VerifyRarityParameterStatusByUserId;
//# sourceMappingURL=VerifyRarityParameterStatusByUserId.js.map