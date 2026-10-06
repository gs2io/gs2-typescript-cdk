"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.TransactionSettingV2 = exports.TransactionResult = exports.AcquireActionResult = exports.ConsumeActionResult = exports.VerifyActionResult = exports.UnleashMaterialSelection = exports.UnleashQuantityMaterialSettingMatchType = exports.UnleashQuantityMaterialSetting = exports.UnleashIndividualMaterialSettingGradeCondition = exports.UnleashIndividualMaterialSettingMatchType = exports.UnleashIndividualMaterialSetting = exports.UnleashMaterialMaterialType = exports.UnleashMaterial = exports.UnleashRecipe = exports.UnleashRateEntryModelType = exports.UnleashRateEntryModel = exports.Material = exports.BonusRate = exports.UnleashRateModel = exports.RateModel = exports.Namespace = void 0;
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
const RateModel_1 = tslib_1.__importDefault(require("./RateModel"));
exports.RateModel = RateModel_1.default;
const UnleashRateModel_1 = tslib_1.__importDefault(require("./UnleashRateModel"));
exports.UnleashRateModel = UnleashRateModel_1.default;
const BonusRate_1 = tslib_1.__importDefault(require("./BonusRate"));
exports.BonusRate = BonusRate_1.default;
const Material_1 = tslib_1.__importDefault(require("./Material"));
exports.Material = Material_1.default;
const UnleashRateEntryModel_1 = tslib_1.__importDefault(require("./UnleashRateEntryModel"));
exports.UnleashRateEntryModel = UnleashRateEntryModel_1.default;
const UnleashRateEntryModelType_1 = require("./enums/UnleashRateEntryModelType");
Object.defineProperty(exports, "UnleashRateEntryModelType", { enumerable: true, get: function () { return UnleashRateEntryModelType_1.UnleashRateEntryModelType; } });
const UnleashRecipe_1 = tslib_1.__importDefault(require("./UnleashRecipe"));
exports.UnleashRecipe = UnleashRecipe_1.default;
const UnleashMaterial_1 = tslib_1.__importDefault(require("./UnleashMaterial"));
exports.UnleashMaterial = UnleashMaterial_1.default;
const UnleashMaterialMaterialType_1 = require("./enums/UnleashMaterialMaterialType");
Object.defineProperty(exports, "UnleashMaterialMaterialType", { enumerable: true, get: function () { return UnleashMaterialMaterialType_1.UnleashMaterialMaterialType; } });
const UnleashIndividualMaterialSetting_1 = tslib_1.__importDefault(require("./UnleashIndividualMaterialSetting"));
exports.UnleashIndividualMaterialSetting = UnleashIndividualMaterialSetting_1.default;
const UnleashIndividualMaterialSettingMatchType_1 = require("./enums/UnleashIndividualMaterialSettingMatchType");
Object.defineProperty(exports, "UnleashIndividualMaterialSettingMatchType", { enumerable: true, get: function () { return UnleashIndividualMaterialSettingMatchType_1.UnleashIndividualMaterialSettingMatchType; } });
const UnleashIndividualMaterialSettingGradeCondition_1 = require("./enums/UnleashIndividualMaterialSettingGradeCondition");
Object.defineProperty(exports, "UnleashIndividualMaterialSettingGradeCondition", { enumerable: true, get: function () { return UnleashIndividualMaterialSettingGradeCondition_1.UnleashIndividualMaterialSettingGradeCondition; } });
const UnleashQuantityMaterialSetting_1 = tslib_1.__importDefault(require("./UnleashQuantityMaterialSetting"));
exports.UnleashQuantityMaterialSetting = UnleashQuantityMaterialSetting_1.default;
const UnleashQuantityMaterialSettingMatchType_1 = require("./enums/UnleashQuantityMaterialSettingMatchType");
Object.defineProperty(exports, "UnleashQuantityMaterialSettingMatchType", { enumerable: true, get: function () { return UnleashQuantityMaterialSettingMatchType_1.UnleashQuantityMaterialSettingMatchType; } });
const UnleashMaterialSelection_1 = tslib_1.__importDefault(require("./UnleashMaterialSelection"));
exports.UnleashMaterialSelection = UnleashMaterialSelection_1.default;
const VerifyActionResult_1 = tslib_1.__importDefault(require("./VerifyActionResult"));
exports.VerifyActionResult = VerifyActionResult_1.default;
const ConsumeActionResult_1 = tslib_1.__importDefault(require("./ConsumeActionResult"));
exports.ConsumeActionResult = ConsumeActionResult_1.default;
const AcquireActionResult_1 = tslib_1.__importDefault(require("./AcquireActionResult"));
exports.AcquireActionResult = AcquireActionResult_1.default;
const TransactionResult_1 = tslib_1.__importDefault(require("./TransactionResult"));
exports.TransactionResult = TransactionResult_1.default;
const TransactionSettingV2_1 = tslib_1.__importDefault(require("./TransactionSettingV2"));
exports.TransactionSettingV2 = TransactionSettingV2_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map