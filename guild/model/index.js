"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.ReceiveMemberRequest = exports.Member = exports.RoleModel = exports.GuildJoinPolicy = exports.Inbox = exports.GuildModel = exports.Namespace = void 0;
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
const GuildModel_1 = tslib_1.__importDefault(require("./GuildModel"));
exports.GuildModel = GuildModel_1.default;
const Inbox_1 = tslib_1.__importDefault(require("./Inbox"));
exports.Inbox = Inbox_1.default;
const GuildJoinPolicy_1 = require("./enums/GuildJoinPolicy");
Object.defineProperty(exports, "GuildJoinPolicy", { enumerable: true, get: function () { return GuildJoinPolicy_1.GuildJoinPolicy; } });
const RoleModel_1 = tslib_1.__importDefault(require("./RoleModel"));
exports.RoleModel = RoleModel_1.default;
const Member_1 = tslib_1.__importDefault(require("./Member"));
exports.Member = Member_1.default;
const ReceiveMemberRequest_1 = tslib_1.__importDefault(require("./ReceiveMemberRequest"));
exports.ReceiveMemberRequest = ReceiveMemberRequest_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map