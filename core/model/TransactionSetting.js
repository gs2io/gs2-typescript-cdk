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
class TransactionSetting {
    constructor(options = null) {
        var _a, _b, _c, _d, _e;
        this.enableAtomicCommit = (_a = options === null || options === void 0 ? void 0 : options.enableAtomicCommit) !== null && _a !== void 0 ? _a : false;
        this.transactionUseDistributor = (_b = options === null || options === void 0 ? void 0 : options.transactionUseDistributor) !== null && _b !== void 0 ? _b : false;
        this.acquireActionUseJobQueue = (_c = options === null || options === void 0 ? void 0 : options.acquireActionUseJobQueue) !== null && _c !== void 0 ? _c : false;
        this.distributorNamespaceId = (_d = options === null || options === void 0 ? void 0 : options.distributorNamespaceId) !== null && _d !== void 0 ? _d : null;
        this.queueNamespaceId = (_e = options === null || options === void 0 ? void 0 : options.queueNamespaceId) !== null && _e !== void 0 ? _e : null;
    }
    properties() {
        let properties = {};
        properties["EnableAutoRun"] = true;
        if (this.enableAtomicCommit != null) {
            properties["EnableAtomicCommit"] = this.enableAtomicCommit;
        }
        if (this.transactionUseDistributor != null) {
            properties["TransactionUseDistributor"] = this.transactionUseDistributor;
        }
        if (this.acquireActionUseJobQueue != null) {
            properties["AcquireActionUseJobQueue"] = this.acquireActionUseJobQueue;
        }
        if (this.distributorNamespaceId != null) {
            properties["DistributorNamespaceId"] = this.distributorNamespaceId;
        }
        if (this.queueNamespaceId != null) {
            properties["QueueNamespaceId"] = this.queueNamespaceId;
        }
        return properties;
    }
}
exports.default = TransactionSetting;
//# sourceMappingURL=TransactionSetting.js.map