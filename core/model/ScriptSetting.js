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
class ScriptSetting {
    constructor(doneTriggerTargetType, triggerScriptId = null, doneTriggerScriptId = null, doneTriggerQueueNamespaceId = null) {
        this.triggerScriptId = triggerScriptId;
        this.doneTriggerTargetType = doneTriggerTargetType;
        this.doneTriggerScriptId = doneTriggerScriptId;
        this.doneTriggerQueueNamespaceId = doneTriggerQueueNamespaceId;
    }
    properties() {
        let properties = {};
        if (this.triggerScriptId != null) {
            properties["TriggerScriptId"] = this.triggerScriptId;
        }
        if (this.doneTriggerTargetType != null) {
            properties["DoneTriggerTargetType"] = this.doneTriggerTargetType;
        }
        if (this.doneTriggerScriptId != null) {
            properties["DoneTriggerScriptId"] = this.doneTriggerScriptId;
        }
        if (this.doneTriggerQueueNamespaceId != null) {
            properties["DoneTriggerQueueNamespaceId"] = this.doneTriggerQueueNamespaceId;
        }
        return properties;
    }
}
exports.default = ScriptSetting;
//# sourceMappingURL=ScriptSetting.js.map