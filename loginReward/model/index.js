"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.TransactionResult = exports.AcquireActionResult = exports.ConsumeActionResult = exports.VerifyActionResult = exports.Reward = exports.BonusModelMissedReceiveRelief = exports.BonusModelRepeat = exports.BonusModelMode = exports.BonusModel = exports.Namespace = void 0;
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
const BonusModel_1 = tslib_1.__importDefault(require("./BonusModel"));
exports.BonusModel = BonusModel_1.default;
const BonusModelMode_1 = require("./enum/BonusModelMode");
Object.defineProperty(exports, "BonusModelMode", { enumerable: true, get: function () { return BonusModelMode_1.BonusModelMode; } });
const BonusModelRepeat_1 = require("./enum/BonusModelRepeat");
Object.defineProperty(exports, "BonusModelRepeat", { enumerable: true, get: function () { return BonusModelRepeat_1.BonusModelRepeat; } });
const BonusModelMissedReceiveRelief_1 = require("./enum/BonusModelMissedReceiveRelief");
Object.defineProperty(exports, "BonusModelMissedReceiveRelief", { enumerable: true, get: function () { return BonusModelMissedReceiveRelief_1.BonusModelMissedReceiveRelief; } });
const Reward_1 = tslib_1.__importDefault(require("./Reward"));
exports.Reward = Reward_1.default;
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