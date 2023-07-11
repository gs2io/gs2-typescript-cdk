"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.CalculatedAt = exports.CategoryModelScope = exports.CategoryModelOrderDirection = exports.CategoryModel = exports.Namespace = void 0;
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
const CategoryModel_1 = tslib_1.__importDefault(require("./CategoryModel"));
exports.CategoryModel = CategoryModel_1.default;
const CategoryModelOrderDirection_1 = require("./enum/CategoryModelOrderDirection");
Object.defineProperty(exports, "CategoryModelOrderDirection", { enumerable: true, get: function () { return CategoryModelOrderDirection_1.CategoryModelOrderDirection; } });
const CategoryModelScope_1 = require("./enum/CategoryModelScope");
Object.defineProperty(exports, "CategoryModelScope", { enumerable: true, get: function () { return CategoryModelScope_1.CategoryModelScope; } });
const CalculatedAt_1 = tslib_1.__importDefault(require("./CalculatedAt"));
exports.CalculatedAt = CalculatedAt_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map