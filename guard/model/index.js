"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockingPolicyModelIpAddressRestriction = exports.BlockingPolicyModelIpAddressesDetection = exports.BlockingPolicyModelReputationIpRestriction = exports.BlockingPolicyModelReputationIpDetection = exports.BlockingPolicyModelHostingProviderIpRestriction = exports.BlockingPolicyModelHostingProviderIpDetection = exports.BlockingPolicyModelAnonymousIpRestriction = exports.BlockingPolicyModelAnonymousIpDetection = exports.BlockingPolicyModelLocationRestriction = exports.BlockingPolicyModelLocationDetection = exports.BlockingPolicyModelDefaultRestriction = exports.BlockingPolicyModel = exports.NamespaceStatus = exports.Namespace = void 0;
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
const NamespaceStatus_1 = require("./enums/NamespaceStatus");
Object.defineProperty(exports, "NamespaceStatus", { enumerable: true, get: function () { return NamespaceStatus_1.NamespaceStatus; } });
const BlockingPolicyModel_1 = tslib_1.__importDefault(require("./BlockingPolicyModel"));
exports.BlockingPolicyModel = BlockingPolicyModel_1.default;
const BlockingPolicyModelDefaultRestriction_1 = require("./enums/BlockingPolicyModelDefaultRestriction");
Object.defineProperty(exports, "BlockingPolicyModelDefaultRestriction", { enumerable: true, get: function () { return BlockingPolicyModelDefaultRestriction_1.BlockingPolicyModelDefaultRestriction; } });
const BlockingPolicyModelLocationDetection_1 = require("./enums/BlockingPolicyModelLocationDetection");
Object.defineProperty(exports, "BlockingPolicyModelLocationDetection", { enumerable: true, get: function () { return BlockingPolicyModelLocationDetection_1.BlockingPolicyModelLocationDetection; } });
const BlockingPolicyModelLocationRestriction_1 = require("./enums/BlockingPolicyModelLocationRestriction");
Object.defineProperty(exports, "BlockingPolicyModelLocationRestriction", { enumerable: true, get: function () { return BlockingPolicyModelLocationRestriction_1.BlockingPolicyModelLocationRestriction; } });
const BlockingPolicyModelAnonymousIpDetection_1 = require("./enums/BlockingPolicyModelAnonymousIpDetection");
Object.defineProperty(exports, "BlockingPolicyModelAnonymousIpDetection", { enumerable: true, get: function () { return BlockingPolicyModelAnonymousIpDetection_1.BlockingPolicyModelAnonymousIpDetection; } });
const BlockingPolicyModelAnonymousIpRestriction_1 = require("./enums/BlockingPolicyModelAnonymousIpRestriction");
Object.defineProperty(exports, "BlockingPolicyModelAnonymousIpRestriction", { enumerable: true, get: function () { return BlockingPolicyModelAnonymousIpRestriction_1.BlockingPolicyModelAnonymousIpRestriction; } });
const BlockingPolicyModelHostingProviderIpDetection_1 = require("./enums/BlockingPolicyModelHostingProviderIpDetection");
Object.defineProperty(exports, "BlockingPolicyModelHostingProviderIpDetection", { enumerable: true, get: function () { return BlockingPolicyModelHostingProviderIpDetection_1.BlockingPolicyModelHostingProviderIpDetection; } });
const BlockingPolicyModelHostingProviderIpRestriction_1 = require("./enums/BlockingPolicyModelHostingProviderIpRestriction");
Object.defineProperty(exports, "BlockingPolicyModelHostingProviderIpRestriction", { enumerable: true, get: function () { return BlockingPolicyModelHostingProviderIpRestriction_1.BlockingPolicyModelHostingProviderIpRestriction; } });
const BlockingPolicyModelReputationIpDetection_1 = require("./enums/BlockingPolicyModelReputationIpDetection");
Object.defineProperty(exports, "BlockingPolicyModelReputationIpDetection", { enumerable: true, get: function () { return BlockingPolicyModelReputationIpDetection_1.BlockingPolicyModelReputationIpDetection; } });
const BlockingPolicyModelReputationIpRestriction_1 = require("./enums/BlockingPolicyModelReputationIpRestriction");
Object.defineProperty(exports, "BlockingPolicyModelReputationIpRestriction", { enumerable: true, get: function () { return BlockingPolicyModelReputationIpRestriction_1.BlockingPolicyModelReputationIpRestriction; } });
const BlockingPolicyModelIpAddressesDetection_1 = require("./enums/BlockingPolicyModelIpAddressesDetection");
Object.defineProperty(exports, "BlockingPolicyModelIpAddressesDetection", { enumerable: true, get: function () { return BlockingPolicyModelIpAddressesDetection_1.BlockingPolicyModelIpAddressesDetection; } });
const BlockingPolicyModelIpAddressRestriction_1 = require("./enums/BlockingPolicyModelIpAddressRestriction");
Object.defineProperty(exports, "BlockingPolicyModelIpAddressRestriction", { enumerable: true, get: function () { return BlockingPolicyModelIpAddressRestriction_1.BlockingPolicyModelIpAddressRestriction; } });
//# sourceMappingURL=index.js.map