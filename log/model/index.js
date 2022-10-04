"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsightStatus = exports.Insight = exports.NamespaceType = exports.Namespace = exports.ExecuteStampTaskLogCount = exports.ExecuteStampTaskLog = exports.ExecuteStampSheetLogCount = exports.ExecuteStampSheetLog = exports.IssueStampSheetLogCount = exports.IssueStampSheetLog = exports.AccessLogCount = exports.AccessLog = void 0;
const tslib_1 = require("tslib");
/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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
const AccessLog_1 = tslib_1.__importDefault(require("./AccessLog"));
exports.AccessLog = AccessLog_1.default;
const AccessLogCount_1 = tslib_1.__importDefault(require("./AccessLogCount"));
exports.AccessLogCount = AccessLogCount_1.default;
const IssueStampSheetLog_1 = tslib_1.__importDefault(require("./IssueStampSheetLog"));
exports.IssueStampSheetLog = IssueStampSheetLog_1.default;
const IssueStampSheetLogCount_1 = tslib_1.__importDefault(require("./IssueStampSheetLogCount"));
exports.IssueStampSheetLogCount = IssueStampSheetLogCount_1.default;
const ExecuteStampSheetLog_1 = tslib_1.__importDefault(require("./ExecuteStampSheetLog"));
exports.ExecuteStampSheetLog = ExecuteStampSheetLog_1.default;
const ExecuteStampSheetLogCount_1 = tslib_1.__importDefault(require("./ExecuteStampSheetLogCount"));
exports.ExecuteStampSheetLogCount = ExecuteStampSheetLogCount_1.default;
const ExecuteStampTaskLog_1 = tslib_1.__importDefault(require("./ExecuteStampTaskLog"));
exports.ExecuteStampTaskLog = ExecuteStampTaskLog_1.default;
const ExecuteStampTaskLogCount_1 = tslib_1.__importDefault(require("./ExecuteStampTaskLogCount"));
exports.ExecuteStampTaskLogCount = ExecuteStampTaskLogCount_1.default;
const Namespace_1 = tslib_1.__importDefault(require("./Namespace"));
exports.Namespace = Namespace_1.default;
const Namespace_2 = require("./Namespace");
Object.defineProperty(exports, "NamespaceType", { enumerable: true, get: function () { return Namespace_2.NamespaceType; } });
const Insight_1 = tslib_1.__importDefault(require("./Insight"));
exports.Insight = Insight_1.default;
const Insight_2 = require("./Insight");
Object.defineProperty(exports, "InsightStatus", { enumerable: true, get: function () { return Insight_2.InsightStatus; } });
//# sourceMappingURL=index.js.map