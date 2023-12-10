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
    constructor(distributorNamespaceId = null, queueNamespaceId = null) {
        this.distributorNamespaceId = distributorNamespaceId;
        this.queueNamespaceId = queueNamespaceId;
    }
    properties() {
        let properties = {};
        properties["EnableAutoRun"] = true;
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