"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizeTableMaster = exports.LotteryModelMasterMethod = exports.LotteryModelMasterMode = exports.LotteryModelMaster = exports.Namespace = exports.CurrentMasterData = exports.PrizeTable = exports.LotteryModelMethod = exports.LotteryModelMode = exports.LotteryModel = exports.BoxItems = exports.BoxItem = exports.DrawnPrize = exports.PrizeType = exports.Prize = exports.Probability = void 0;
const tslib_1 = require("tslib");
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
const Probability_1 = tslib_1.__importDefault(require("./Probability"));
exports.Probability = Probability_1.default;
const Prize_1 = tslib_1.__importDefault(require("./Prize"));
exports.Prize = Prize_1.default;
const Prize_2 = require("./Prize");
Object.defineProperty(exports, "PrizeType", { enumerable: true, get: function () { return Prize_2.PrizeType; } });
const DrawnPrize_1 = tslib_1.__importDefault(require("./DrawnPrize"));
exports.DrawnPrize = DrawnPrize_1.default;
const BoxItem_1 = tslib_1.__importDefault(require("./BoxItem"));
exports.BoxItem = BoxItem_1.default;
const BoxItems_1 = tslib_1.__importDefault(require("./BoxItems"));
exports.BoxItems = BoxItems_1.default;
const LotteryModel_1 = tslib_1.__importDefault(require("./LotteryModel"));
exports.LotteryModel = LotteryModel_1.default;
const LotteryModel_2 = require("./LotteryModel");
Object.defineProperty(exports, "LotteryModelMode", { enumerable: true, get: function () { return LotteryModel_2.LotteryModelMode; } });
const LotteryModel_3 = require("./LotteryModel");
Object.defineProperty(exports, "LotteryModelMethod", { enumerable: true, get: function () { return LotteryModel_3.LotteryModelMethod; } });
const PrizeTable_1 = tslib_1.__importDefault(require("./PrizeTable"));
exports.PrizeTable = PrizeTable_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
const Namespace_1 = tslib_1.__importDefault(require("./Namespace"));
exports.Namespace = Namespace_1.default;
const LotteryModelMaster_1 = tslib_1.__importDefault(require("./LotteryModelMaster"));
exports.LotteryModelMaster = LotteryModelMaster_1.default;
const LotteryModelMaster_2 = require("./LotteryModelMaster");
Object.defineProperty(exports, "LotteryModelMasterMode", { enumerable: true, get: function () { return LotteryModelMaster_2.LotteryModelMasterMode; } });
const LotteryModelMaster_3 = require("./LotteryModelMaster");
Object.defineProperty(exports, "LotteryModelMasterMethod", { enumerable: true, get: function () { return LotteryModelMaster_3.LotteryModelMasterMethod; } });
const PrizeTableMaster_1 = tslib_1.__importDefault(require("./PrizeTableMaster"));
exports.PrizeTableMaster = PrizeTableMaster_1.default;
//# sourceMappingURL=index.js.map