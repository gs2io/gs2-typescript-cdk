"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyCounterValueByUserId = exports.DecreaseCounterByUserId = exports.ReceiveByUserId = exports.SetCounterByUserId = exports.IncreaseCounterByUserId = exports.RevertReceiveByUserId = void 0;
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
const RevertReceiveByUserId_1 = tslib_1.__importDefault(require("./RevertReceiveByUserId"));
exports.RevertReceiveByUserId = RevertReceiveByUserId_1.default;
const IncreaseCounterByUserId_1 = tslib_1.__importDefault(require("./IncreaseCounterByUserId"));
exports.IncreaseCounterByUserId = IncreaseCounterByUserId_1.default;
const SetCounterByUserId_1 = tslib_1.__importDefault(require("./SetCounterByUserId"));
exports.SetCounterByUserId = SetCounterByUserId_1.default;
const ReceiveByUserId_1 = tslib_1.__importDefault(require("./ReceiveByUserId"));
exports.ReceiveByUserId = ReceiveByUserId_1.default;
const DecreaseCounterByUserId_1 = tslib_1.__importDefault(require("./DecreaseCounterByUserId"));
exports.DecreaseCounterByUserId = DecreaseCounterByUserId_1.default;
const VerifyCounterValueByUserId_1 = tslib_1.__importDefault(require("./VerifyCounterValueByUserId"));
exports.VerifyCounterValueByUserId = VerifyCounterValueByUserId_1.default;
//# sourceMappingURL=index.js.map