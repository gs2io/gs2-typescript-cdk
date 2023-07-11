"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.ScopedValueResetType = exports.ScopedValue = exports.MissionTaskModel = exports.MissionGroupModelResetDayOfWeek = exports.MissionGroupModelResetType = exports.MissionGroupModel = exports.CounterModel = exports.Namespace = exports.CounterScopeModelResetDayOfWeek = exports.CounterScopeModelResetType = exports.CounterScopeModel = void 0;
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
const CounterScopeModelResetType_1 = require("./enum/CounterScopeModelResetType");
Object.defineProperty(exports, "CounterScopeModelResetType", { enumerable: true, get: function () { return CounterScopeModelResetType_1.CounterScopeModelResetType; } });
const CounterScopeModelResetDayOfWeek_1 = require("./enum/CounterScopeModelResetDayOfWeek");
Object.defineProperty(exports, "CounterScopeModelResetDayOfWeek", { enumerable: true, get: function () { return CounterScopeModelResetDayOfWeek_1.CounterScopeModelResetDayOfWeek; } });
const Namespace_1 = tslib_1.__importDefault(require("./Namespace"));
exports.Namespace = Namespace_1.default;
const CounterModel_1 = tslib_1.__importDefault(require("./CounterModel"));
exports.CounterModel = CounterModel_1.default;
const MissionGroupModel_1 = tslib_1.__importDefault(require("./MissionGroupModel"));
exports.MissionGroupModel = MissionGroupModel_1.default;
const MissionGroupModelResetType_1 = require("./enum/MissionGroupModelResetType");
Object.defineProperty(exports, "MissionGroupModelResetType", { enumerable: true, get: function () { return MissionGroupModelResetType_1.MissionGroupModelResetType; } });
const MissionGroupModelResetDayOfWeek_1 = require("./enum/MissionGroupModelResetDayOfWeek");
Object.defineProperty(exports, "MissionGroupModelResetDayOfWeek", { enumerable: true, get: function () { return MissionGroupModelResetDayOfWeek_1.MissionGroupModelResetDayOfWeek; } });
const MissionTaskModel_1 = tslib_1.__importDefault(require("./MissionTaskModel"));
exports.MissionTaskModel = MissionTaskModel_1.default;
const ScopedValue_1 = tslib_1.__importDefault(require("./ScopedValue"));
exports.ScopedValue = ScopedValue_1.default;
const ScopedValueResetType_1 = require("./enum/ScopedValueResetType");
Object.defineProperty(exports, "ScopedValueResetType", { enumerable: true, get: function () { return ScopedValueResetType_1.ScopedValueResetType; } });
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map