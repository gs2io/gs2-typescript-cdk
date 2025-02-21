"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.BuffTargetModelTargetModelName = exports.BuffTargetActionTargetActionName = exports.OverrideBuffRate = exports.BuffEntryModelTargetType = exports.BuffEntryModelExpression = exports.BuffEntryModel = exports.BuffTargetGrn = exports.BuffTargetAction = exports.BuffTargetModel = exports.Namespace = void 0;
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
const BuffTargetModel_1 = tslib_1.__importDefault(require("./BuffTargetModel"));
exports.BuffTargetModel = BuffTargetModel_1.default;
const BuffTargetAction_1 = tslib_1.__importDefault(require("./BuffTargetAction"));
exports.BuffTargetAction = BuffTargetAction_1.default;
const BuffTargetGrn_1 = tslib_1.__importDefault(require("./BuffTargetGrn"));
exports.BuffTargetGrn = BuffTargetGrn_1.default;
const BuffEntryModel_1 = tslib_1.__importDefault(require("./BuffEntryModel"));
exports.BuffEntryModel = BuffEntryModel_1.default;
const BuffEntryModelExpression_1 = require("./enums/BuffEntryModelExpression");
Object.defineProperty(exports, "BuffEntryModelExpression", { enumerable: true, get: function () { return BuffEntryModelExpression_1.BuffEntryModelExpression; } });
const BuffEntryModelTargetType_1 = require("./enums/BuffEntryModelTargetType");
Object.defineProperty(exports, "BuffEntryModelTargetType", { enumerable: true, get: function () { return BuffEntryModelTargetType_1.BuffEntryModelTargetType; } });
const OverrideBuffRate_1 = tslib_1.__importDefault(require("./OverrideBuffRate"));
exports.OverrideBuffRate = OverrideBuffRate_1.default;
const BuffTargetActionTargetActionName_1 = require("./enums/BuffTargetActionTargetActionName");
Object.defineProperty(exports, "BuffTargetActionTargetActionName", { enumerable: true, get: function () { return BuffTargetActionTargetActionName_1.BuffTargetActionTargetActionName; } });
const BuffTargetModelTargetModelName_1 = require("./enums/BuffTargetModelTargetModelName");
Object.defineProperty(exports, "BuffTargetModelTargetModelName", { enumerable: true, get: function () { return BuffTargetModelTargetModelName_1.BuffTargetModelTargetModelName; } });
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map