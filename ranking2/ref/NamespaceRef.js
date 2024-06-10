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
const GlobalRankingModelRef_1 = tslib_1.__importDefault(require("./GlobalRankingModelRef"));
const SubscribeRankingModelRef_1 = tslib_1.__importDefault(require("./SubscribeRankingModelRef"));
const ClusterRankingModelRef_1 = tslib_1.__importDefault(require("./ClusterRankingModelRef"));
const CreateGlobalRankingReceivedRewardByUserId_1 = tslib_1.__importDefault(require("../stampSheet/CreateGlobalRankingReceivedRewardByUserId"));
const CreateClusterRankingReceivedRewardByUserId_1 = tslib_1.__importDefault(require("../stampSheet/CreateClusterRankingReceivedRewardByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    globalRankingModel(rankingName) {
        return new GlobalRankingModelRef_1.default(this.namespaceName, rankingName);
    }
    subscribeRankingModel(rankingName) {
        return new SubscribeRankingModelRef_1.default(this.namespaceName, rankingName);
    }
    clusterRankingModel(rankingName) {
        return new ClusterRankingModelRef_1.default(this.namespaceName, rankingName);
    }
    createGlobalRankingReceivedReward(rankingName, season = null, userId = "#{userId}") {
        return new CreateGlobalRankingReceivedRewardByUserId_1.default(this.namespaceName, rankingName, season, userId);
    }
    createClusterRankingReceivedReward(rankingName, clusterName, season = null, userId = "#{userId}") {
        return new CreateClusterRankingReceivedRewardByUserId_1.default(this.namespaceName, rankingName, clusterName, season, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "ranking2",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map