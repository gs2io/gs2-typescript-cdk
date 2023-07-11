"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.SignTargetVersion = exports.TargetVersion = exports.Status = exports.VersionModelScope = exports.VersionModel = exports.Version = exports.Namespace = void 0;
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
const Version_1 = tslib_1.__importDefault(require("./Version"));
exports.Version = Version_1.default;
const VersionModel_1 = tslib_1.__importDefault(require("./VersionModel"));
exports.VersionModel = VersionModel_1.default;
const VersionModelScope_1 = require("./enum/VersionModelScope");
Object.defineProperty(exports, "VersionModelScope", { enumerable: true, get: function () { return VersionModelScope_1.VersionModelScope; } });
const Status_1 = tslib_1.__importDefault(require("./Status"));
exports.Status = Status_1.default;
const TargetVersion_1 = tslib_1.__importDefault(require("./TargetVersion"));
exports.TargetVersion = TargetVersion_1.default;
const SignTargetVersion_1 = tslib_1.__importDefault(require("./SignTargetVersion"));
exports.SignTargetVersion = SignTargetVersion_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map