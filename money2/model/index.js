"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.UnusedBalance = exports.DailyTransactionHistory = exports.GooglePlayContent = exports.AppleAppStoreContent = exports.GooglePlayVerifyReceiptEvent = exports.AppleAppStoreVerifyReceiptEventEnvironment = exports.AppleAppStoreVerifyReceiptEvent = exports.WithdrawEvent = exports.DepositEvent = exports.VerifyReceiptEventPlatform = exports.VerifyReceiptEvent = exports.DepositTransaction = exports.WalletSummary = exports.FakeSettingAcceptFakeReceipt = exports.FakeSetting = exports.GooglePlaySetting = exports.AppleAppStoreSetting = exports.PlatformSetting = exports.ReceiptStore = exports.Receipt = exports.StoreContentModel = exports.NamespaceCurrencyUsagePriority = exports.Namespace = void 0;
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
const NamespaceCurrencyUsagePriority_1 = require("./enum/NamespaceCurrencyUsagePriority");
Object.defineProperty(exports, "NamespaceCurrencyUsagePriority", { enumerable: true, get: function () { return NamespaceCurrencyUsagePriority_1.NamespaceCurrencyUsagePriority; } });
const StoreContentModel_1 = tslib_1.__importDefault(require("./StoreContentModel"));
exports.StoreContentModel = StoreContentModel_1.default;
const Receipt_1 = tslib_1.__importDefault(require("./Receipt"));
exports.Receipt = Receipt_1.default;
const ReceiptStore_1 = require("./enum/ReceiptStore");
Object.defineProperty(exports, "ReceiptStore", { enumerable: true, get: function () { return ReceiptStore_1.ReceiptStore; } });
const PlatformSetting_1 = tslib_1.__importDefault(require("./PlatformSetting"));
exports.PlatformSetting = PlatformSetting_1.default;
const AppleAppStoreSetting_1 = tslib_1.__importDefault(require("./AppleAppStoreSetting"));
exports.AppleAppStoreSetting = AppleAppStoreSetting_1.default;
const GooglePlaySetting_1 = tslib_1.__importDefault(require("./GooglePlaySetting"));
exports.GooglePlaySetting = GooglePlaySetting_1.default;
const FakeSetting_1 = tslib_1.__importDefault(require("./FakeSetting"));
exports.FakeSetting = FakeSetting_1.default;
const FakeSettingAcceptFakeReceipt_1 = require("./enum/FakeSettingAcceptFakeReceipt");
Object.defineProperty(exports, "FakeSettingAcceptFakeReceipt", { enumerable: true, get: function () { return FakeSettingAcceptFakeReceipt_1.FakeSettingAcceptFakeReceipt; } });
const WalletSummary_1 = tslib_1.__importDefault(require("./WalletSummary"));
exports.WalletSummary = WalletSummary_1.default;
const DepositTransaction_1 = tslib_1.__importDefault(require("./DepositTransaction"));
exports.DepositTransaction = DepositTransaction_1.default;
const VerifyReceiptEvent_1 = tslib_1.__importDefault(require("./VerifyReceiptEvent"));
exports.VerifyReceiptEvent = VerifyReceiptEvent_1.default;
const VerifyReceiptEventPlatform_1 = require("./enum/VerifyReceiptEventPlatform");
Object.defineProperty(exports, "VerifyReceiptEventPlatform", { enumerable: true, get: function () { return VerifyReceiptEventPlatform_1.VerifyReceiptEventPlatform; } });
const DepositEvent_1 = tslib_1.__importDefault(require("./DepositEvent"));
exports.DepositEvent = DepositEvent_1.default;
const WithdrawEvent_1 = tslib_1.__importDefault(require("./WithdrawEvent"));
exports.WithdrawEvent = WithdrawEvent_1.default;
const AppleAppStoreVerifyReceiptEvent_1 = tslib_1.__importDefault(require("./AppleAppStoreVerifyReceiptEvent"));
exports.AppleAppStoreVerifyReceiptEvent = AppleAppStoreVerifyReceiptEvent_1.default;
const AppleAppStoreVerifyReceiptEventEnvironment_1 = require("./enum/AppleAppStoreVerifyReceiptEventEnvironment");
Object.defineProperty(exports, "AppleAppStoreVerifyReceiptEventEnvironment", { enumerable: true, get: function () { return AppleAppStoreVerifyReceiptEventEnvironment_1.AppleAppStoreVerifyReceiptEventEnvironment; } });
const GooglePlayVerifyReceiptEvent_1 = tslib_1.__importDefault(require("./GooglePlayVerifyReceiptEvent"));
exports.GooglePlayVerifyReceiptEvent = GooglePlayVerifyReceiptEvent_1.default;
const AppleAppStoreContent_1 = tslib_1.__importDefault(require("./AppleAppStoreContent"));
exports.AppleAppStoreContent = AppleAppStoreContent_1.default;
const GooglePlayContent_1 = tslib_1.__importDefault(require("./GooglePlayContent"));
exports.GooglePlayContent = GooglePlayContent_1.default;
const DailyTransactionHistory_1 = tslib_1.__importDefault(require("./DailyTransactionHistory"));
exports.DailyTransactionHistory = DailyTransactionHistory_1.default;
const UnusedBalance_1 = tslib_1.__importDefault(require("./UnusedBalance"));
exports.UnusedBalance = UnusedBalance_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map