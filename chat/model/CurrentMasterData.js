"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const model_1 = require("../../core/model");
class CurrentMasterData extends model_1.CdkResource {
    constructor(stack, namespaceName, categoryModels) {
        super("Chat_CurrentModelMaster_" + namespaceName);
        this.version = "2020-04-30";
        this.namespaceName = namespaceName;
        this.categoryModels = categoryModels;
        stack.addResource(this);
    }
    alternateKeys() {
        return this.namespaceName;
    }
    resourceType() {
        return "GS2::Chat::CurrentModelMaster";
    }
    properties() {
        let properties = {};
        let settings = {};
        settings["version"] = this.version;
        if (this.categoryModels != null) {
            settings["categoryModels"] = this.categoryModels.map(v => v.properties());
        }
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (settings != null) {
            properties["Settings"] = settings;
        }
        return properties;
    }
}
exports.default = CurrentMasterData;
//# sourceMappingURL=CurrentMasterData.js.map