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
const RateModelRef_1 = tslib_1.__importDefault(require("./RateModelRef"));
const IncrementalRateModelRef_1 = tslib_1.__importDefault(require("./IncrementalRateModelRef"));
const ExchangeByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ExchangeByUserId"));
const IncrementalExchangeByUserId_1 = tslib_1.__importDefault(require("../stampSheet/IncrementalExchangeByUserId"));
const CreateAwaitByUserId_1 = tslib_1.__importDefault(require("../stampSheet/CreateAwaitByUserId"));
const AcquireForceByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AcquireForceByUserId"));
const SkipByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SkipByUserId"));
const DeleteAwaitByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DeleteAwaitByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    rateModel(rateName) {
        return new RateModelRef_1.default(this.namespaceName, rateName);
    }
    incrementalRateModel(rateName) {
        return new IncrementalRateModelRef_1.default(this.namespaceName, rateName);
    }
    exchange(rateName, count, config = null, userId = "#{userId}") {
        return new ExchangeByUserId_1.default(this.namespaceName, rateName, count, config, userId);
    }
    incrementalExchange(rateName, count, config = null, userId = "#{userId}") {
        return new IncrementalExchangeByUserId_1.default(this.namespaceName, rateName, count, config, userId);
    }
    createAwait(rateName, count = null, config = null, userId = "#{userId}") {
        return new CreateAwaitByUserId_1.default(this.namespaceName, rateName, count, config, userId);
    }
    acquireForce(awaitName = null, config = null, userId = "#{userId}") {
        return new AcquireForceByUserId_1.default(this.namespaceName, awaitName, config, userId);
    }
    skip(awaitName = null, skipType = null, minutes = null, rate = null, userId = "#{userId}") {
        return new SkipByUserId_1.default(this.namespaceName, awaitName, skipType, minutes, rate, userId);
    }
    deleteAwait(awaitName = null, userId = "#{userId}") {
        return new DeleteAwaitByUserId_1.default(this.namespaceName, awaitName, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "exchange",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map