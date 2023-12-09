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
class RecordReceipt extends model_1.ConsumeAction {
    constructor(namespaceName, contentsId, receipt, userId = "#{userId}") {
        super();
        this.namespaceName = namespaceName;
        this.contentsId = contentsId;
        this.receipt = receipt;
        this.userId = userId;
    }
    request() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.contentsId != null) {
            properties["contentsId"] = this.contentsId;
        }
        if (this.receipt != null) {
            properties["receipt"] = this.receipt;
        }
        return properties;
    }
    action() {
        return "Gs2Money:RecordReceipt";
    }
}
exports.default = RecordReceipt;
//# sourceMappingURL=RecordReceipt.js.map