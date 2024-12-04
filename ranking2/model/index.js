"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.TransactionResult = exports.AcquireActionResult = exports.ConsumeActionResult = exports.VerifyActionResult = exports.RankingReward = exports.SubscribeRankingModelOrderDirection = exports.SubscribeRankingModel = exports.ClusterRankingModelOrderDirection = exports.ClusterRankingModelClusterType = exports.ClusterRankingModel = exports.GlobalRankingModelOrderDirection = exports.GlobalRankingModel = exports.Namespace = void 0;
const tslib_1 = require("tslib");
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
const Namespace_1 = tslib_1.__importDefault(require("./Namespace"));
exports.Namespace = Namespace_1.default;
const GlobalRankingModel_1 = tslib_1.__importDefault(require("./GlobalRankingModel"));
exports.GlobalRankingModel = GlobalRankingModel_1.default;
const GlobalRankingModelOrderDirection_1 = require("./enum/GlobalRankingModelOrderDirection");
Object.defineProperty(exports, "GlobalRankingModelOrderDirection", { enumerable: true, get: function () { return GlobalRankingModelOrderDirection_1.GlobalRankingModelOrderDirection; } });
const ClusterRankingModel_1 = tslib_1.__importDefault(require("./ClusterRankingModel"));
exports.ClusterRankingModel = ClusterRankingModel_1.default;
const ClusterRankingModelClusterType_1 = require("./enum/ClusterRankingModelClusterType");
Object.defineProperty(exports, "ClusterRankingModelClusterType", { enumerable: true, get: function () { return ClusterRankingModelClusterType_1.ClusterRankingModelClusterType; } });
const ClusterRankingModelOrderDirection_1 = require("./enum/ClusterRankingModelOrderDirection");
Object.defineProperty(exports, "ClusterRankingModelOrderDirection", { enumerable: true, get: function () { return ClusterRankingModelOrderDirection_1.ClusterRankingModelOrderDirection; } });
const SubscribeRankingModel_1 = tslib_1.__importDefault(require("./SubscribeRankingModel"));
exports.SubscribeRankingModel = SubscribeRankingModel_1.default;
const SubscribeRankingModelOrderDirection_1 = require("./enum/SubscribeRankingModelOrderDirection");
Object.defineProperty(exports, "SubscribeRankingModelOrderDirection", { enumerable: true, get: function () { return SubscribeRankingModelOrderDirection_1.SubscribeRankingModelOrderDirection; } });
const RankingReward_1 = tslib_1.__importDefault(require("./RankingReward"));
exports.RankingReward = RankingReward_1.default;
const VerifyActionResult_1 = tslib_1.__importDefault(require("./VerifyActionResult"));
exports.VerifyActionResult = VerifyActionResult_1.default;
const ConsumeActionResult_1 = tslib_1.__importDefault(require("./ConsumeActionResult"));
exports.ConsumeActionResult = ConsumeActionResult_1.default;
const AcquireActionResult_1 = tslib_1.__importDefault(require("./AcquireActionResult"));
exports.AcquireActionResult = AcquireActionResult_1.default;
const TransactionResult_1 = tslib_1.__importDefault(require("./TransactionResult"));
exports.TransactionResult = TransactionResult_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map