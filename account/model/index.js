"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.TransactionSettingV2 = exports.AccountDeletionSettingCleanUserDataScope = exports.AccountDeletionSettingLoginDuringGracePeriod = exports.AccountDeletionSetting = exports.BanStatus = exports.PlatformUser = exports.ScopeValue = exports.IssuedCodeSetting = exports.OpenIdConnectSetting = exports.TakeOverTypeModelTakeOverMethod = exports.TakeOverTypeModel = exports.Namespace = void 0;
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
const TakeOverTypeModel_1 = tslib_1.__importDefault(require("./TakeOverTypeModel"));
exports.TakeOverTypeModel = TakeOverTypeModel_1.default;
const TakeOverTypeModelTakeOverMethod_1 = require("./enums/TakeOverTypeModelTakeOverMethod");
Object.defineProperty(exports, "TakeOverTypeModelTakeOverMethod", { enumerable: true, get: function () { return TakeOverTypeModelTakeOverMethod_1.TakeOverTypeModelTakeOverMethod; } });
const OpenIdConnectSetting_1 = tslib_1.__importDefault(require("./OpenIdConnectSetting"));
exports.OpenIdConnectSetting = OpenIdConnectSetting_1.default;
const IssuedCodeSetting_1 = tslib_1.__importDefault(require("./IssuedCodeSetting"));
exports.IssuedCodeSetting = IssuedCodeSetting_1.default;
const ScopeValue_1 = tslib_1.__importDefault(require("./ScopeValue"));
exports.ScopeValue = ScopeValue_1.default;
const PlatformUser_1 = tslib_1.__importDefault(require("./PlatformUser"));
exports.PlatformUser = PlatformUser_1.default;
const BanStatus_1 = tslib_1.__importDefault(require("./BanStatus"));
exports.BanStatus = BanStatus_1.default;
const AccountDeletionSetting_1 = tslib_1.__importDefault(require("./AccountDeletionSetting"));
exports.AccountDeletionSetting = AccountDeletionSetting_1.default;
const AccountDeletionSettingLoginDuringGracePeriod_1 = require("./enums/AccountDeletionSettingLoginDuringGracePeriod");
Object.defineProperty(exports, "AccountDeletionSettingLoginDuringGracePeriod", { enumerable: true, get: function () { return AccountDeletionSettingLoginDuringGracePeriod_1.AccountDeletionSettingLoginDuringGracePeriod; } });
const AccountDeletionSettingCleanUserDataScope_1 = require("./enums/AccountDeletionSettingCleanUserDataScope");
Object.defineProperty(exports, "AccountDeletionSettingCleanUserDataScope", { enumerable: true, get: function () { return AccountDeletionSettingCleanUserDataScope_1.AccountDeletionSettingCleanUserDataScope; } });
const TransactionSettingV2_1 = tslib_1.__importDefault(require("./TransactionSettingV2"));
exports.TransactionSettingV2 = TransactionSettingV2_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map