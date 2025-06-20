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
const TriggerByUserId_1 = tslib_1.__importDefault(require("../stampSheet/TriggerByUserId"));
const ExtendTriggerByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ExtendTriggerByUserId"));
const DeleteTriggerByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DeleteTriggerByUserId"));
const VerifyTriggerByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyTriggerByUserId"));
const VerifyEventByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyEventByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    trigger(triggerName, triggerStrategy, ttl = null, eventId = null, userId = "#{userId}") {
        return new TriggerByUserId_1.default(this.namespaceName, triggerName, triggerStrategy, ttl, eventId, userId);
    }
    extendTrigger(triggerName, extendSeconds, userId = "#{userId}") {
        return new ExtendTriggerByUserId_1.default(this.namespaceName, triggerName, extendSeconds, userId);
    }
    deleteTrigger(triggerName, userId = "#{userId}") {
        return new DeleteTriggerByUserId_1.default(this.namespaceName, triggerName, userId);
    }
    verifyTrigger(triggerName, verifyType, elapsedMinutes = null, userId = "#{userId}") {
        return new VerifyTriggerByUserId_1.default(this.namespaceName, triggerName, verifyType, elapsedMinutes, userId);
    }
    verifyEvent(eventName, verifyType, userId = "#{userId}") {
        return new VerifyEventByUserId_1.default(this.namespaceName, eventName, verifyType, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "schedule",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map