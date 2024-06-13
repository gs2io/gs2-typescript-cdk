"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.TimeSpan = exports.SignedBallot = exports.GameResult = exports.Player = exports.Attribute = exports.CapacityOfRole = exports.AttributeRange = exports.SeasonModel = exports.RatingModel = exports.NamespaceEnableCollaborateSeasonRating = exports.NamespaceCompleteMatchmakingTriggerType = exports.NamespaceCreateGatheringTriggerType = exports.NamespaceEnableDisconnectDetection = exports.Namespace = void 0;
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
const NamespaceEnableDisconnectDetection_1 = require("./enum/NamespaceEnableDisconnectDetection");
Object.defineProperty(exports, "NamespaceEnableDisconnectDetection", { enumerable: true, get: function () { return NamespaceEnableDisconnectDetection_1.NamespaceEnableDisconnectDetection; } });
const NamespaceCreateGatheringTriggerType_1 = require("./enum/NamespaceCreateGatheringTriggerType");
Object.defineProperty(exports, "NamespaceCreateGatheringTriggerType", { enumerable: true, get: function () { return NamespaceCreateGatheringTriggerType_1.NamespaceCreateGatheringTriggerType; } });
const NamespaceCompleteMatchmakingTriggerType_1 = require("./enum/NamespaceCompleteMatchmakingTriggerType");
Object.defineProperty(exports, "NamespaceCompleteMatchmakingTriggerType", { enumerable: true, get: function () { return NamespaceCompleteMatchmakingTriggerType_1.NamespaceCompleteMatchmakingTriggerType; } });
const NamespaceEnableCollaborateSeasonRating_1 = require("./enum/NamespaceEnableCollaborateSeasonRating");
Object.defineProperty(exports, "NamespaceEnableCollaborateSeasonRating", { enumerable: true, get: function () { return NamespaceEnableCollaborateSeasonRating_1.NamespaceEnableCollaborateSeasonRating; } });
const RatingModel_1 = tslib_1.__importDefault(require("./RatingModel"));
exports.RatingModel = RatingModel_1.default;
const SeasonModel_1 = tslib_1.__importDefault(require("./SeasonModel"));
exports.SeasonModel = SeasonModel_1.default;
const AttributeRange_1 = tslib_1.__importDefault(require("./AttributeRange"));
exports.AttributeRange = AttributeRange_1.default;
const CapacityOfRole_1 = tslib_1.__importDefault(require("./CapacityOfRole"));
exports.CapacityOfRole = CapacityOfRole_1.default;
const Attribute_1 = tslib_1.__importDefault(require("./Attribute"));
exports.Attribute = Attribute_1.default;
const Player_1 = tslib_1.__importDefault(require("./Player"));
exports.Player = Player_1.default;
const GameResult_1 = tslib_1.__importDefault(require("./GameResult"));
exports.GameResult = GameResult_1.default;
const SignedBallot_1 = tslib_1.__importDefault(require("./SignedBallot"));
exports.SignedBallot = SignedBallot_1.default;
const TimeSpan_1 = tslib_1.__importDefault(require("./TimeSpan"));
exports.TimeSpan = TimeSpan_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map