"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.TransactionResult = exports.AcquireActionResult = exports.ConsumeActionResult = exports.VerifyActionResult = exports.SlotWithSignaturePropertyType = exports.SlotWithSignature = exports.SlotModel = exports.Slot = exports.PropertyFormModel = exports.MoldModel = exports.FormModel = exports.Namespace = void 0;
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
const FormModel_1 = tslib_1.__importDefault(require("./FormModel"));
exports.FormModel = FormModel_1.default;
const MoldModel_1 = tslib_1.__importDefault(require("./MoldModel"));
exports.MoldModel = MoldModel_1.default;
const PropertyFormModel_1 = tslib_1.__importDefault(require("./PropertyFormModel"));
exports.PropertyFormModel = PropertyFormModel_1.default;
const Slot_1 = tslib_1.__importDefault(require("./Slot"));
exports.Slot = Slot_1.default;
const SlotModel_1 = tslib_1.__importDefault(require("./SlotModel"));
exports.SlotModel = SlotModel_1.default;
const SlotWithSignature_1 = tslib_1.__importDefault(require("./SlotWithSignature"));
exports.SlotWithSignature = SlotWithSignature_1.default;
const SlotWithSignaturePropertyType_1 = require("./enum/SlotWithSignaturePropertyType");
Object.defineProperty(exports, "SlotWithSignaturePropertyType", { enumerable: true, get: function () { return SlotWithSignaturePropertyType_1.SlotWithSignaturePropertyType; } });
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