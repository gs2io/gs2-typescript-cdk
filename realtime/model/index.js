"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamespaceServerSpec = exports.NamespaceServerType = exports.Namespace = void 0;
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
 *
 * deny overwrite
 */
const Namespace_1 = tslib_1.__importDefault(require("./Namespace"));
exports.Namespace = Namespace_1.default;
const NamespaceServerType_1 = require("./enums/NamespaceServerType");
Object.defineProperty(exports, "NamespaceServerType", { enumerable: true, get: function () { return NamespaceServerType_1.NamespaceServerType; } });
const NamespaceServerSpec_1 = require("./enums/NamespaceServerSpec");
Object.defineProperty(exports, "NamespaceServerSpec", { enumerable: true, get: function () { return NamespaceServerSpec_1.NamespaceServerSpec; } });
//# sourceMappingURL=index.js.map