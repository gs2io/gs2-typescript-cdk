"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.TransactionResult = exports.AcquireActionResult = exports.ConsumeActionResult = exports.VerifyActionResult = exports.LogRate = exports.LogCost = exports.IncrementalRateModelCalculateType = exports.IncrementalRateModel = exports.RateModelTimingType = exports.RateModel = exports.Namespace = void 0;
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
const RateModel_1 = tslib_1.__importDefault(require("./RateModel"));
exports.RateModel = RateModel_1.default;
const RateModelTimingType_1 = require("./enums/RateModelTimingType");
Object.defineProperty(exports, "RateModelTimingType", { enumerable: true, get: function () { return RateModelTimingType_1.RateModelTimingType; } });
const IncrementalRateModel_1 = tslib_1.__importDefault(require("./IncrementalRateModel"));
exports.IncrementalRateModel = IncrementalRateModel_1.default;
const IncrementalRateModelCalculateType_1 = require("./enums/IncrementalRateModelCalculateType");
Object.defineProperty(exports, "IncrementalRateModelCalculateType", { enumerable: true, get: function () { return IncrementalRateModelCalculateType_1.IncrementalRateModelCalculateType; } });
const LogCost_1 = tslib_1.__importDefault(require("./LogCost"));
exports.LogCost = LogCost_1.default;
const LogRate_1 = tslib_1.__importDefault(require("./LogRate"));
exports.LogRate = LogRate_1.default;
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