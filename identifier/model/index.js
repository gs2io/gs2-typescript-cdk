"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorAuthenticationSettingStatus = exports.TwoFactorAuthenticationSetting = exports.ProjectToken = exports.AttachSecurityPolicy = exports.PasswordEnableTwoFactorAuthentication = exports.Password = exports.Identifier = exports.SecurityPolicy = exports.User = void 0;
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
const User_1 = tslib_1.__importDefault(require("./User"));
exports.User = User_1.default;
const SecurityPolicy_1 = tslib_1.__importDefault(require("./SecurityPolicy"));
exports.SecurityPolicy = SecurityPolicy_1.default;
const Identifier_1 = tslib_1.__importDefault(require("./Identifier"));
exports.Identifier = Identifier_1.default;
const Password_1 = tslib_1.__importDefault(require("./Password"));
exports.Password = Password_1.default;
const PasswordEnableTwoFactorAuthentication_1 = require("./enum/PasswordEnableTwoFactorAuthentication");
Object.defineProperty(exports, "PasswordEnableTwoFactorAuthentication", { enumerable: true, get: function () { return PasswordEnableTwoFactorAuthentication_1.PasswordEnableTwoFactorAuthentication; } });
const AttachSecurityPolicy_1 = tslib_1.__importDefault(require("./AttachSecurityPolicy"));
exports.AttachSecurityPolicy = AttachSecurityPolicy_1.default;
const ProjectToken_1 = tslib_1.__importDefault(require("./ProjectToken"));
exports.ProjectToken = ProjectToken_1.default;
const TwoFactorAuthenticationSetting_1 = tslib_1.__importDefault(require("./TwoFactorAuthenticationSetting"));
exports.TwoFactorAuthenticationSetting = TwoFactorAuthenticationSetting_1.default;
const TwoFactorAuthenticationSettingStatus_1 = require("./enum/TwoFactorAuthenticationSettingStatus");
Object.defineProperty(exports, "TwoFactorAuthenticationSettingStatus", { enumerable: true, get: function () { return TwoFactorAuthenticationSettingStatus_1.TwoFactorAuthenticationSettingStatus; } });
//# sourceMappingURL=index.js.map