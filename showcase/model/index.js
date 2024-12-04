"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.TransactionResult = exports.AcquireActionResult = exports.ConsumeActionResult = exports.VerifyActionResult = exports.RandomDisplayItemModel = exports.PurchaseCount = exports.RandomShowcase = exports.DisplayItemType = exports.DisplayItem = exports.Showcase = exports.SalesItemGroup = exports.SalesItem = exports.Namespace = void 0;
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
const SalesItem_1 = tslib_1.__importDefault(require("./SalesItem"));
exports.SalesItem = SalesItem_1.default;
const SalesItemGroup_1 = tslib_1.__importDefault(require("./SalesItemGroup"));
exports.SalesItemGroup = SalesItemGroup_1.default;
const Showcase_1 = tslib_1.__importDefault(require("./Showcase"));
exports.Showcase = Showcase_1.default;
const DisplayItem_1 = tslib_1.__importDefault(require("./DisplayItem"));
exports.DisplayItem = DisplayItem_1.default;
const DisplayItemType_1 = require("./enum/DisplayItemType");
Object.defineProperty(exports, "DisplayItemType", { enumerable: true, get: function () { return DisplayItemType_1.DisplayItemType; } });
const RandomShowcase_1 = tslib_1.__importDefault(require("./RandomShowcase"));
exports.RandomShowcase = RandomShowcase_1.default;
const PurchaseCount_1 = tslib_1.__importDefault(require("./PurchaseCount"));
exports.PurchaseCount = PurchaseCount_1.default;
const RandomDisplayItemModel_1 = tslib_1.__importDefault(require("./RandomDisplayItemModel"));
exports.RandomDisplayItemModel = RandomDisplayItemModel_1.default;
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