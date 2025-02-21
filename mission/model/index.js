"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.TransactionResult = exports.AcquireActionResult = exports.ConsumeActionResult = exports.VerifyActionResult = exports.TargetCounterModelResetType = exports.TargetCounterModelScopeType = exports.TargetCounterModel = exports.ScopedValueResetType = exports.ScopedValueScopeType = exports.ScopedValue = exports.MissionTaskModelTargetResetType = exports.MissionTaskModelVerifyCompleteType = exports.MissionTaskModel = exports.MissionGroupModelResetDayOfWeek = exports.MissionGroupModelResetType = exports.MissionGroupModel = exports.CounterModel = exports.Namespace = exports.CounterScopeModelResetDayOfWeek = exports.CounterScopeModelResetType = exports.CounterScopeModelScopeType = exports.CounterScopeModel = void 0;
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
const CounterScopeModel_1 = tslib_1.__importDefault(require("./CounterScopeModel"));
exports.CounterScopeModel = CounterScopeModel_1.default;
const CounterScopeModelScopeType_1 = require("./enums/CounterScopeModelScopeType");
Object.defineProperty(exports, "CounterScopeModelScopeType", { enumerable: true, get: function () { return CounterScopeModelScopeType_1.CounterScopeModelScopeType; } });
const CounterScopeModelResetType_1 = require("./enums/CounterScopeModelResetType");
Object.defineProperty(exports, "CounterScopeModelResetType", { enumerable: true, get: function () { return CounterScopeModelResetType_1.CounterScopeModelResetType; } });
const CounterScopeModelResetDayOfWeek_1 = require("./enums/CounterScopeModelResetDayOfWeek");
Object.defineProperty(exports, "CounterScopeModelResetDayOfWeek", { enumerable: true, get: function () { return CounterScopeModelResetDayOfWeek_1.CounterScopeModelResetDayOfWeek; } });
const Namespace_1 = tslib_1.__importDefault(require("./Namespace"));
exports.Namespace = Namespace_1.default;
const CounterModel_1 = tslib_1.__importDefault(require("./CounterModel"));
exports.CounterModel = CounterModel_1.default;
const MissionGroupModel_1 = tslib_1.__importDefault(require("./MissionGroupModel"));
exports.MissionGroupModel = MissionGroupModel_1.default;
const MissionGroupModelResetType_1 = require("./enums/MissionGroupModelResetType");
Object.defineProperty(exports, "MissionGroupModelResetType", { enumerable: true, get: function () { return MissionGroupModelResetType_1.MissionGroupModelResetType; } });
const MissionGroupModelResetDayOfWeek_1 = require("./enums/MissionGroupModelResetDayOfWeek");
Object.defineProperty(exports, "MissionGroupModelResetDayOfWeek", { enumerable: true, get: function () { return MissionGroupModelResetDayOfWeek_1.MissionGroupModelResetDayOfWeek; } });
const MissionTaskModel_1 = tslib_1.__importDefault(require("./MissionTaskModel"));
exports.MissionTaskModel = MissionTaskModel_1.default;
const MissionTaskModelVerifyCompleteType_1 = require("./enums/MissionTaskModelVerifyCompleteType");
Object.defineProperty(exports, "MissionTaskModelVerifyCompleteType", { enumerable: true, get: function () { return MissionTaskModelVerifyCompleteType_1.MissionTaskModelVerifyCompleteType; } });
const MissionTaskModelTargetResetType_1 = require("./enums/MissionTaskModelTargetResetType");
Object.defineProperty(exports, "MissionTaskModelTargetResetType", { enumerable: true, get: function () { return MissionTaskModelTargetResetType_1.MissionTaskModelTargetResetType; } });
const ScopedValue_1 = tslib_1.__importDefault(require("./ScopedValue"));
exports.ScopedValue = ScopedValue_1.default;
const ScopedValueScopeType_1 = require("./enums/ScopedValueScopeType");
Object.defineProperty(exports, "ScopedValueScopeType", { enumerable: true, get: function () { return ScopedValueScopeType_1.ScopedValueScopeType; } });
const ScopedValueResetType_1 = require("./enums/ScopedValueResetType");
Object.defineProperty(exports, "ScopedValueResetType", { enumerable: true, get: function () { return ScopedValueResetType_1.ScopedValueResetType; } });
const TargetCounterModel_1 = tslib_1.__importDefault(require("./TargetCounterModel"));
exports.TargetCounterModel = TargetCounterModel_1.default;
const TargetCounterModelScopeType_1 = require("./enums/TargetCounterModelScopeType");
Object.defineProperty(exports, "TargetCounterModelScopeType", { enumerable: true, get: function () { return TargetCounterModelScopeType_1.TargetCounterModelScopeType; } });
const TargetCounterModelResetType_1 = require("./enums/TargetCounterModelResetType");
Object.defineProperty(exports, "TargetCounterModelResetType", { enumerable: true, get: function () { return TargetCounterModelResetType_1.TargetCounterModelResetType; } });
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