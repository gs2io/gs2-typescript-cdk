"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.BoxItem = exports.DrawnPrize = exports.PrizeLimit = exports.PrizeType = exports.Prize = exports.PrizeTable = exports.LotteryModelMethod = exports.LotteryModelMode = exports.LotteryModel = exports.Namespace = void 0;
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
const LotteryModel_1 = tslib_1.__importDefault(require("./LotteryModel"));
exports.LotteryModel = LotteryModel_1.default;
const LotteryModelMode_1 = require("./enum/LotteryModelMode");
Object.defineProperty(exports, "LotteryModelMode", { enumerable: true, get: function () { return LotteryModelMode_1.LotteryModelMode; } });
const LotteryModelMethod_1 = require("./enum/LotteryModelMethod");
Object.defineProperty(exports, "LotteryModelMethod", { enumerable: true, get: function () { return LotteryModelMethod_1.LotteryModelMethod; } });
const PrizeTable_1 = tslib_1.__importDefault(require("./PrizeTable"));
exports.PrizeTable = PrizeTable_1.default;
const Prize_1 = tslib_1.__importDefault(require("./Prize"));
exports.Prize = Prize_1.default;
const PrizeType_1 = require("./enum/PrizeType");
Object.defineProperty(exports, "PrizeType", { enumerable: true, get: function () { return PrizeType_1.PrizeType; } });
const PrizeLimit_1 = tslib_1.__importDefault(require("./PrizeLimit"));
exports.PrizeLimit = PrizeLimit_1.default;
const DrawnPrize_1 = tslib_1.__importDefault(require("./DrawnPrize"));
exports.DrawnPrize = DrawnPrize_1.default;
const BoxItem_1 = tslib_1.__importDefault(require("./BoxItem"));
exports.BoxItem = BoxItem_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map