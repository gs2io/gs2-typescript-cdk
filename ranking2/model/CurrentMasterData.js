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
    constructor(stack, namespaceName, globalRankingModels, clusterRankingModels, subscribeRankingModels) {
        super("Ranking2_CurrentRankingMaster_" + namespaceName);
        this.version = "2024-05-30";
        this.namespaceName = namespaceName;
        this.globalRankingModels = globalRankingModels;
        this.clusterRankingModels = clusterRankingModels;
        this.subscribeRankingModels = subscribeRankingModels;
        stack.addResource(this);
    }
    alternateKeys() {
        return this.namespaceName;
    }
    resourceType() {
        return "GS2::Ranking2::CurrentRankingMaster";
    }
    properties() {
        let properties = {};
        let settings = {};
        settings["version"] = this.version;
        if (this.globalRankingModels != null) {
            settings["globalRankingModels"] = this.globalRankingModels.map(v => v.properties());
        }
        if (this.clusterRankingModels != null) {
            settings["clusterRankingModels"] = this.clusterRankingModels.map(v => v.properties());
        }
        if (this.subscribeRankingModels != null) {
            settings["subscribeRankingModels"] = this.subscribeRankingModels.map(v => v.properties());
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