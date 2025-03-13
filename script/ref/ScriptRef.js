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
const InvokeScript_1 = tslib_1.__importDefault(require("../stampSheet/InvokeScript"));
class ScriptRef {
    constructor(namespaceName, scriptName) {
        this.namespaceName = namespaceName;
        this.scriptName = scriptName;
    }
    invokeScript(scriptId, args = null, randomStatus = null, forceUseDistributor = null, userId = "#{userId}") {
        return new InvokeScript_1.default(scriptId, args, randomStatus, forceUseDistributor, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "script",
            this.namespaceName,
            "script",
            this.scriptName,
        ]).str();
    }
}
exports.default = ScriptRef;
//# sourceMappingURL=ScriptRef.js.map