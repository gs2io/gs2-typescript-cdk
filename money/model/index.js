"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletDetail = exports.NamespaceCurrency = exports.NamespacePriority = exports.Namespace = void 0;
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
const NamespacePriority_1 = require("./enums/NamespacePriority");
Object.defineProperty(exports, "NamespacePriority", { enumerable: true, get: function () { return NamespacePriority_1.NamespacePriority; } });
const NamespaceCurrency_1 = require("./enums/NamespaceCurrency");
Object.defineProperty(exports, "NamespaceCurrency", { enumerable: true, get: function () { return NamespaceCurrency_1.NamespaceCurrency; } });
const WalletDetail_1 = tslib_1.__importDefault(require("./WalletDetail"));
exports.WalletDetail = WalletDetail_1.default;
//# sourceMappingURL=index.js.map